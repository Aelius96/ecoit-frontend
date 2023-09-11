
import { Domain } from "../domain/domain";

export class Constant {
  public static BASE_URL = "http://localhost:8080";
  // public static BASE_URL = "http://172.16.10.161:8080";
  // public static BASE_URL= "https://ecoit.com.vn:8443"
  public static PAGE_SIZE_OPTION = [
    5,10,15
  ]
  public static PAGE_SIZE_IMAGE =[
    16,32,48
  ]

  public static   ABOUT ={
    CREATE : `${Domain.ABOUT}/create`,
    UPDATE :`${Domain.ABOUT}/update`,
    GETID : `${Domain.ABOUT}`,
    LIST : `${Domain.ABOUT}`
  }

  public static ADDRESS ={
      CREATE : `${Domain.ADDRESS}/add`,
      UPDATE :`${Domain.ADDRESS}/update`,
      DELETE : `${Domain.ADDRESS}/delete`,
      LIST : `${Domain.ADDRESS}`
  }
  public static AUTH ={
      REGISTER : `${Domain.AUTH}/register`,
      LOGIN :`${Domain.AUTH}/admin/login`,
      LOGIN_USER : `${Domain.AUTH}/login`,
  }

  public static CATEGORY ={
    CREATE : `${Domain.CATEGORY}/create`,
    UPDATE :`${Domain.CATEGORY}/update`,
    DELETE : `${Domain.CATEGORY}/delete`,
    LIST : `${Domain.CATEGORY}/list`,
    LIST_PAGE_SIZE : `${Domain.CATEGORY}`,
    GET_BY_ID:`${Domain.CATEGORY}`
}
  public static COMMENT = {
    GET_LIST_COMMENT_WITH_PAGE_ADMIN: `${Domain.COMMENT}/search`,
    GET_COMMENT_CHILD_BY_PARENT : `${Domain.COMMENT}/get`,
    GET_COMMENT_CHILD_BY_PARENT_ADMIN : `${Domain.COMMENT}/child`,
    GET_PARENT_COMMENT_ACTIVE: `${Domain.COMMENT}/parent`,
    GET_PARENTCMT_ADMIN: `${Domain.COMMENT}/show`,
    GET_LIST_COMMENT_HOME: `${Domain.COMMENT}/home`,
    GET_LIST_ALL: `${Domain.COMMENT}/all`,
    DISABLE_COMMENT: `${Domain.COMMENT}/disable`,
    ENABLE_COMMENT: `${Domain.COMMENT}/enable`,
    CREAT_COMMENT: `${Domain.COMMENT}/create`,
    UPDATE_COMMENT: `${Domain.COMMENT}/update`,
    GET_COMMENT_BY_POST_ID: `${Domain.COMMENT}`,
    DELETE_COMMENT: `${Domain.COMMENT}/delete`,
  }

  public static CONTACT={
    LIST_ALL_SIZE_PAGE : `${Domain.CONTACT}/number`,
    LIST_ALL_CONTACT : `${Domain.CONTACT}/user`,
    ADD_CONTACT : `${Domain.CONTACT}/add`,
    DELETE : `${Domain.CONTACT}/delete`,
    CONTACTED : `${Domain.CONTACT}/show`,
    NOTCONTACT : `${Domain.CONTACT}/hide`,
    GET_PENDING : `${Domain.CONTACT}/pending`,
    GET_PROCESS : `${Domain.CONTACT}/process`,
  }
  public static CUSTOMER = {
    LIST_ALL_WITH_PAGE : `${Domain.CUSTOMER}`,
    GET_ALL_CUSTOMER : `${Domain.CUSTOMER}/home`,
    ADD_CUSTOMER: `${Domain.CUSTOMER}/add`,
    ADDDTO_CUSTOMER: `${Domain.CUSTOMER}/adddto`,
    UPDATE_CUSTOMER : `${Domain.CUSTOMER}/update`,
    DELETE_CUSTOMER: `${Domain.CUSTOMER}/delete`,
    GET_CUS_BY_ID: `${Domain.CUSTOMER}`,
    GET_CUS_BY_URL: `${Domain.CUSTOMER}/home`,
  }

  public static CUSTYPICAL ={
      LIST_ALL_WITH_PAGE : `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}`,
      LIST_ALL_WITH_PAGE_HOME : `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}/home`,
      LIST_ALL: `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}/home/show`,
      GETTC_BY_URL: `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}`,
      ADDTC: `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}/add`,
      GETTC_BY_ID: `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}`,
      UPDATETC: `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}/update`,
      DELETETC: `${Domain.CUSTOMER}/${Domain.CUSTYPICAL}/delete`,
  }

  public static ALBUMS={
    DOWNLOAD_FILE : `${Domain.ALBUMS}/downloadFile`,
    ADD_IMAGE: `${Domain.ALBUMS}/add`,
    DELETE_FILE: `${Domain.ALBUMS}/deleteFile`,
    GET_FILE_BY_ID: `${Domain.ALBUMS}`,
    GET_ALL_IMAGE: `${Domain.ALBUMS}/image/all`,
    UPDATE_IMAGE: `${Domain.ALBUMS}/image/update`,
    GET_LISTALL_WITH_PAGE: `${Domain.ALBUMS}/image`,
    GET_LIST_ALL: `${Domain.ALBUMS}/image/all`,
  }
  public static GALLERY={
    GET_ALL_LIST_CHANGE_PAGE : `${Domain.GALLERY}`,
    GET_LIST_ALL: `${Domain.GALLERY}/show`,
    ADD_IMAGE_BY_ID: `${Domain.GALLERY}/addimage`,
    GET_FIND_BY_ID: `${Domain.GALLERY}`,
    DELETE: `${Domain.GALLERY}/delete`,
    UPDATE: `${Domain.GALLERY}/update`,
    ADD_GALLERY: `${Domain.GALLERY}/add`,
    HIDE: `${Domain.GALLERY}/hide`,
    SHOW: `${Domain.GALLERY}/show`,
  }
  public static HASHTAG={
    LIST_ALL : `${Domain.HASHTAG}`,
  }

  public static NAV={
    LIST_ALL_WITH_PAGE: `${Domain.NAV}` ,
    LIST_ALL : `${Domain.NAV}` ,
    GET_NAV_BY_ID: `${Domain.NAV}` ,
    UPDATE_NAV: `${Domain.NAV}/update` ,
    DELETE_NAV: `${Domain.NAV}/delete` ,
    DELETE_NAV_ALL: `${Domain.NAV}/deleteAll`,
    ADD_NAV: `${Domain.NAV}/add` ,
  }
  public static NUMBER_TYPICAL ={
    GET_LIST_ALL_PAGE : `${Domain.NUMBER}`,
    GET_ALL_NUMBER : `${Domain.NUMBER}/home`,
    GET_NUMBER_BY_ID: `${Domain.NUMBER}`,
    ADD_NUMBER: `${Domain.NUMBER}/add`,
    EDIT_NUMBER: `${Domain.NUMBER}/update`,
    DELETE_NUMBER: `${Domain.NUMBER}/delete`,
  }
  public static POST={
    LIST_ALL_WITH_PAGE : `${Domain.POST}` ,
    LIST_ALL_WITH_PAGE_HOME: `${Domain.POST}/filter` ,
    LIST_ALL_WITH_PAGE_BY_NEWS: `${Domain.POST}/home/show/news` ,
    LIST_ALL_WITH_PAGE_BY_RECRUIT: `${Domain.POST}/home/show/recruit` ,
    LIST_ALL: `${Domain.POST}/list` ,
    SEARCH: `${Domain.POST}/tim-kiem` ,
    GET_POST_BY_URL: `${Domain.POST}/home` ,
    CREATE_POST: `${Domain.POST}/add` ,
    GET_POST_BY_ID: `${Domain.POST}` ,
    UPDATE_POST: `${Domain.POST}/update` ,
    DELETE_POST: `${Domain.POST}/delete` ,
    GET_IMAGE_BY_POST_ID: `${Domain.POST}/image`,
  }
  public static  PRODUCT = {
    LIST_ALL_WITH_PAGE : `${Domain.PRODUCT}` ,
    GET_PRODUCT_LIST: `${Domain.PRODUCT}/home` ,
    SEARCH_PRODUCT_LIST: `${Domain.PRODUCT}/search` ,
    GET_PRODUCT_BY_ID: `${Domain.PRODUCT}` ,
    GET_PRODUCT_BY_URL: `${Domain.PRODUCT}/home` ,
    ADD_NEW_PRODUCT: `${Domain.PRODUCT}/add` ,
    UPDATE_PRODUCT: `${Domain.PRODUCT}/update` ,
    DELETE_PRODUCT: `${Domain.PRODUCT}/disable` ,
  }
  public static ROLE ={
    GET_ROLE_BY_ID:`role`,
    LIST_ROLE:`role`,
    ADD_ROLE:`${Domain.ROLE}/addRole`,
    DELETE_ROLE:`${Domain.ROLE}/delete`,
    UPDATE_ROLE:`${Domain.ROLE}/updateRole`
  }
  public static SLIDERS ={
    GET_LIST_ALL : `${Domain.SLIDERS}/home` ,
    GET_SLIDERS: `${Domain.SLIDERS}` ,
    ADD: `${Domain.SLIDERS}/add` ,
    GET_BY_ID: `${Domain.SLIDERS}` ,
    UPDATE: `${Domain.SLIDERS}/update` ,
    HIDE_SLIDER: `${Domain.SLIDERS}/hide` ,
    SHOW_SLIDER: `${Domain.SLIDERS}/show` ,
    DELETE_SLIDER: `${Domain.SLIDERS}/status` ,
    GET_IMAGE: `${Domain.SLIDERS}/images` ,
  }
  public static USER={
    GET_LIST_ALL_WITH_PAGE_USER:`${Domain.USER}` ,
    // GET_LIST_ALL_USER:`${Domain.USER}/list`,
    GET_USER_BY_ID:`${Domain.USER}` ,
    UPDATE_USER:`${Domain.USER}/update` ,
    UPDATE_USER1:`${Domain.USER}/update1` ,
    DELETE_USER:`${Domain.USER}/delete` ,
    CHANGE_PASSWORD:`${Domain.USER}/changePassword` ,
  }
  public static PERMISSION = {
    GET_LIST_ALL:`${Domain.PERMISSION}`,
    ADD: `${Domain.PERMISSION}/add`,
    UPDATE:`${Domain.PERMISSION}/update`,
    DELETE:`${Domain.PERMISSION}/delete`,
  }
  public static MODULE={
    ADD_MODULE:`${Domain.MODULE}/add`,
    UPDATE_MODULE:`${Domain.MODULE}/update`,
    GET_LIST_MODULE:`${Domain.MODULE}/list`,
    DELETE_MODLUE:`${Domain.MODULE}/delete`
  }
}
