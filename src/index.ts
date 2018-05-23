import './styles/index.scss'
import Request from './helpers/request'
import Utils from './helpers/utils'
import {htmlTemplate} from './helpers/constants'

export interface SliderOptions {
  wrapperId: string,
  width?: number
}

const defaultOptions: SliderOptions = {
  wrapperId: 'sliderWrapper',
  width: 290
};
declare type status = 'fail' | 'success' | 'initialState'

enum VerifyStatus {Fail, Success, InitialState}

export class SliderValidation {
  private startPos: number = 0;
  private isMoving: boolean = false;
  private readonly getCaptchaUrl: string = 'https://captcha.jdcf88.com/api/1/captcha/getCaptcha';
  private readonly validateUrl: string = 'https://captcha.jdcf88.com/api/1/captcha/validate';
  private token: string = '';
  private isLoadingCaptcha: boolean = false;
  private verifyStatus: number = VerifyStatus.InitialState;
  private isValidating: boolean = false;
  private left: number = 0;
  private maxRailDistance: number = 250;

  constructor(options: SliderOptions = defaultOptions) {
    document.getElementById(options.wrapperId).innerHTML = htmlTemplate;
    this.addEventListeners();
    this.dealDrag()

  }

  private addEventListeners(): void {
    document.getElementsByClassName('drag-wrapper')[0].addEventListener('mouseleave', () => {
      if (!this.isMoving) {
        this.toggleCaptcha(false);
      }
    });
    document.getElementById('drag-control').addEventListener('mouseenter', () => {
      if (this.verifyStatus === VerifyStatus.Success || this.isValidating) return;
      this.toggleCaptcha(true);
    });

    document.getElementById('drag-arrow').addEventListener('mousedown', (event) => {
      if (this.verifyStatus === VerifyStatus.Success || this.isValidating) {
        return
      }
      this.startPos = event.pageX;
      this.toggleMovingState(true);
    });
    this.getCaptcha()
  }

  private toggleCaptcha(flag: boolean): void {
    document.getElementsByClassName('captcha-panel')[0].className = `captcha-panel ${flag ? 'show-panel' : ''}`;
    document.getElementsByClassName('captcha-image')[0].className = `captcha-image ${flag ? 'show-captcha' : ''}`;
  }

  private async getCaptcha() {
    try {
      const {data} = await Request.get(this.getCaptchaUrl);
      if (data.code === 1 && data.data) {
        document.getElementsByClassName('background-image')[0].setAttribute('src', data.data.bg);
        document.getElementsByClassName('slider-image')[0].setAttribute('src', data.data.front);
        this.token = data.data.token;
      } else {
        console.warn('get captcha fail')
      }
    } catch (e) {
      console.error(e)
    }
  }

  private async validateCaptcha(params: object) {
    try {
      this.toggleValidatingState(true);
      const {data} = await Request.post(this.validateUrl, params);
      this.toggleMovingState(false);
      this.toggleValidatingState(false);
      if (data.code === 1) {
        this.toggleCaptcha(false);
        this.toggleVerifyStatus(VerifyStatus.Success)
      } else {
        this.toggleVerifyStatus(VerifyStatus.Fail);
        this.toggleCanAnimate(true);
        setTimeout(() => {
          this.toggleCanAnimate(false)
        }, 500);
        setTimeout(() => {
          this.toggleVerifyStatus(VerifyStatus.InitialState);
          this.left = 0;
          this.setStyle(this.left);
        }, 300);
        this.getCaptcha();
        console.warn('validate captcha fail')
      }
    } catch (e) {
      console.error(e)
    }
  }


  private dealDrag() {
    document.onmousemove = (event) => {
      if (this.verifyStatus === VerifyStatus.Success || this.isValidating) return;
      if (this.isMoving) {
        let travelledDistance = event.pageX - this.startPos;
        if (travelledDistance > 0 && travelledDistance <= this.maxRailDistance) {
          this.left = travelledDistance;
          this.setStyle(this.left);
        }
      }
    };
    document.onmouseup = () => {
      if (this.verifyStatus === VerifyStatus.Success || this.isValidating) return;
      if (this.isMoving) {
        this.validateCaptcha({range: this.left / 250 * 100, token: this.token})
      }
    }
  }

  private toggleMovingState(isMoving: boolean) {
    this.isMoving = isMoving;
    const options = [
      {
        element: document.getElementsByClassName('slider-left')[0],
        className: 'moving-slider-left'
      },
      {
        element: document.getElementsByClassName('drag-arrow')[0],
        className: 'moving-slider-bg'
      },
      {
        element: document.getElementsByClassName('drag-icon')[0],
        className: 'moving-icon'
      }
    ];
    if (isMoving) {
      Utils.addClass(options);
      document.getElementById('tips-text').style.display = 'none'
    } else {
      Utils.removeClass(options);
      document.getElementById('tips-text').style.display = this.verifyStatus === VerifyStatus.InitialState ? '' : 'none'
    }
  }

  private setStyle(left: number) {
    document.getElementById('slider-image').style.left = `${left}px`;
    document.getElementById('drag-arrow').style.left = `${left}px`;
    document.getElementById('slider-left').style.width = `${left + 2}px`;
    document.getElementById('is-validating').style.left = `${left + 43}px`;
  }

  private toggleValidatingState(isValidating: boolean) {
    this.isValidating = isValidating;
    document.getElementById('is-validating').style.display = `${isValidating ? 'block' : 'none'}`
  }

  private toggleVerifyStatus(verifyStatus: VerifyStatus) {
    this.verifyStatus = verifyStatus;
    let options = [
      {
        element: document.getElementsByClassName('slider-left')[0],
        className: ''
      },
      {
        element: document.getElementsByClassName('drag-arrow')[0],
        className: ''
      },
      {
        element: document.getElementsByClassName('drag-icon')[0],
        className: ''
      }
    ];
    if (this.verifyStatus === VerifyStatus.Success) {
      options[0].className = 'verify-success';
      options[1].className = 'success-slider-bg';
      options[2].className = 'success-icon';
      Utils.addClass(options);
      document.getElementById('tips-text').style.display = 'none'
    } else if (this.verifyStatus === VerifyStatus.Fail) {
      options[0].className = 'verify-fail';
      options[1].className = 'fail-slider-bg';
      options[2].className = 'fail-icon';
      Utils.addClass(options);
    } else {
      options[0].className = 'verify-fail';
      options[1].className = 'fail-slider-bg';
      options[2].className = 'fail-icon';
      Utils.removeClass(options);
    }
  }

  private toggleCanAnimate(canAnimate: boolean) {
    const options = [{
      element: document.getElementsByClassName('drag-arrow')[0],
      className: 'can-animate'
    }];
    if (canAnimate) {
      Utils.addClass(options)
    } else {
      Utils.removeClass(options)
    }
  }
}