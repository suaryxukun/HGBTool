/**
 * Created by huangguangbao on 2017/12/9.
 */
var component=
{
        prompt:"collection相关基类",

        tools:[
            {
               name:" HGBBaseCollectionViewController",
               prompt:"CollectionViewController"

               },{
               name:" HGBBaseCollectionViewCell",
               prompt:"CollectionViewCell"

               },{
               name:" HGBlayout",
               prompt:"CollectionViewLayout"

               }

        ],
        instruction:"collection相关基类",
        librarys:["Foundation.framework","UIKit.framework"],
        infoPlist:null,
        buildSetting:null,
       framework:"lipo -create Release/Debug-iphoneos/库名.framework/库名  Release/Debug-iphonesimulator/库名.framework/库名 -output Release/Debug-iphoneos/库名.framework/库名",
       a:"lipo -create Release/Debug-iphoneos/库名.a  Release/Debug-iphonesimulator/库名.a -output Release/Debug-iphoneos/库名.a"
};
