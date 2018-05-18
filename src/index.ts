import './styles/index.scss'

export interface SliderOptions {
  wrapperId: string
}

export class SliderValidation {
  constructor(options: SliderOptions) {
    document.getElementById(options.wrapperId).innerHTML = '<div class="drag-wrapper">' +
      '<div class="captcha-panel">' +
      '<div class="captcha-wrapper">' +
      '<div class="captcha-image">' +
      '<img src="http://captcha.jdcf88.com/api/1/captcha/getimage/60628f0b879e49c7b796b496518ed8e9/bg.jpg" style="width: 290px;"> ' +
      '<img src="http://captcha.jdcf88.com/api/1/captcha/getimage/60628f0b879e49c7b796b496518ed8e9/front.png" class="slide-image" style="left: 0;"> ' +
      '<div class="refresh-icon" style=""></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="drag-control animated">' +
      '<div class="slider-left" style="width: 2px;"></div> ' +
      '<div class="drag-arrow drag-arrow-hover" style="left: 0;">' +
      '<i class="drag-icon"></i>' +
      '</div>' +
      '<div class="drag-tips">' +
      '<span class="tips-text">向右滑动滑块填充拼图</span>' +
      '</div>' +
      '</div>' +
      '</div>'
  }
}