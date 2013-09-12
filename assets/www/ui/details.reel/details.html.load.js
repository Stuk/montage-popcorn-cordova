montageDefine("1c0e374","ui/details.reel/details.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <link rel=stylesheet type="text/css" href=details.css>\n\n    <script type="text/montage-serialization">{"title":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"title"}},"bindings":{"value":{"<-":"@owner.data.title"}}},"description":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"description"}},"bindings":{"value":{"<-":"@owner.data.synopsis"}}},"dates":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"dates-content"}},"bindings":{"value":{"<-":"@owner.data.release_dates.theater"}}},"runtime":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"runtime-content"}},"bindings":{"value":{"<-":"@owner.data.runtime"}}},"rentButton":{"prototype":"montage/ui/button.reel","properties":{"element":{"#":"rent-button"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"trailerButton":{"prototype":"montage/ui/button.reel","properties":{"element":{"#":"trailer-button"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"audienceScore":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"audience-score-content"}},"bindings":{"value":{"<-":"@owner.data.ratings.audience_score"}}},"criticsScore":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"critics-score-content"}},"bindings":{"value":{"<-":"@owner.data.ratings.critics_score"}}},"scroller":{"prototype":"montage/ui/scroller.reel","properties":{"element":{"#":"scroller"},"hasMomentum":true}},"owner":{"properties":{"element":{"#":"details"},"cImage":{"#":"c-image"},"aImage":{"#":"a-image"}}}}</script>\n</head>\n<body>\n    <div id=details class=details>\n      <div data-montage-id=moviepopup-container class=moviepopup-container>\n\n          <section>\n              <h2 data-montage-id=title class=title></h2>\n              <p>\n                  <time data-montage-id=dates-content class=score></time>\n                  Runtime <span data-montage-id=runtime-content class=score></span>\n                  Audience <span data-montage-id=a-image class="rt-icon icon-audience"></span>\n                           <span data-montage-id=audience-score-content class=score></span>\n                  Critics <span data-montage-id=c-image class="rt-icon icon-critics"></span>\n                          <span data-montage-id=critics-score-content class=score></span>\n              </p>\n              <div data-montage-id=scroller class=scroller>\n                  <p data-montage-id=description class=description></p>\n              </div>\n          </section>\n\n          <nav class=action-buttons>\n              <button data-montage-id=trailer-button class="button button-trailer">Trailer</button>\n              <button data-montage-id=rent-button class="button button-rent">Rent</button>\n          </nav>\n\n      </div>\n    </div>\n</body>\n</html>'})