export const htmlTemplate: string =
  '<div class="drag-wrapper">' +
    '<div class="captcha-panel">' +
      '<div class="captcha-wrapper">' +
        '<div class="captcha-image">' +
          '<img id="background-image" class="background-image">' +
          '<img id="slider-image" class="slider-image" style="left: 0;">' +
          '<div class="refresh-icon"></div>' +
          '<div id="loading-captcha" class="loading-captcha" style="display: none">' +
          '<div class="is-validating" style="left: 50%;top: 50%;margin-left: -17px;margin-top: -34px"></div>' +
          '<div class="captcha-loading-text">图片加载中..</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div id="drag-control" class="drag-control animated">' +
      '<div id="slider-left" class="slider-left" style="width: 2px;"></div> ' +
      '<div id="drag-arrow" class="drag-arrow drag-arrow-hover" style="left: 0;">' +
        '<i class="drag-icon"></i>' +
      '</div>' +
      '<div id="is-validating" class="is-validating" style="display: none"></div>' +
      '<div class="drag-tips">' +
        '<span id="tips-text" class="tips-text">向右滑动滑块填充拼图</span>' +
      '</div>' +
    '</div>' +
  '</div>';
