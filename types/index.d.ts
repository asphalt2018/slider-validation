import './styles/index.scss';
export interface SliderOptions {
    wrapperId: string;
    width?: number;
}
export declare class SliderValidation {
    private startPos;
    private isMoving;
    private readonly getCaptchaUrl;
    private readonly validateUrl;
    private token;
    private isLoadingCaptcha;
    private verifyStatus;
    private isValidating;
    private left;
    private maxRailDistance;
    constructor(options?: SliderOptions);
    private addEventListeners();
    private toggleCaptcha(flag);
    private getCaptcha();
    private validateCaptcha(params);
    private dealDrag();
    private toggleMovingState(isMoving);
    private setStyle(left);
    private toggleValidatingState(isValidating);
    private toggleVerifyStatus(verifyStatus);
    private toggleCanAnimate(canAnimate);
}
