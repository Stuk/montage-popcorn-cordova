montageDefine("0fe37da","ui/flow.reel/flow.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=flow.css>\n    <script type="text/montage-serialization">{"repetition":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"montage-flow-repetition"}},"bindings":{"objects":{"<-":"@owner.objects"},"contentController":{"<-":"@owner.contentController"},"isSelectionEnabled":{"<-":"@owner.isSelectionEnabled"}}},"flowTranslateComposer":{"prototype":"ui/composer/flow-translate-composer","properties":{"flow":{"@":"owner"},"invertAxis":true,"allowFloats":true,"minScroll":0},"bindings":{"maxScroll":{"<-":"@owner.length"},"_momentumDuration":{"<-":"@owner.momentumDuration"},"translateStride":{"<-":"@owner.stride"},"scrollingMode":{"<-":"@owner.scrollingMode"},"linearScrollingVector":{"<-":"@owner.linearScrollingVector"}}},"slot":{"prototype":"ui/slot.reel","properties":{"element":{"#":"montage-flow-slot"}},"bindings":{"content":{"<->":"@owner.slotContent"}}},"owner":{"properties":{"element":{"#":"montage-flow"},"_repetition":{"@":"repetition"},"_flowTranslateComposer":{"@":"flowTranslateComposer"},"_cameraElement":{"#":"montage-flow-camera"}},"bindings":{"scroll":{"<->":"@flowTranslateComposer.scroll"},"selectedIndexes":{"<-":"@repetition.selectedIndexes"},"activeIndexes":{"<-":"@repetition.activeIndexes"},"draggedSlideIndex":{"<-":"@flowTranslateComposer._closerIndex"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-flow class=montage-Flow>\n        <div data-montage-id=montage-flow-camera class=montage-Flow-camera>\n            <div data-montage-id=montage-flow-repetition class=montage-Flow-Repetition></div>\n            <div data-montage-id=montage-flow-slot class=montage-Flow-Slot></div>\n        </div>\n    </div>\n</body>\n</html>'})