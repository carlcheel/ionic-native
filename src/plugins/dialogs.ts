import {Plugin, Cordova} from './plugin';

export interface promptCallback {

  /**
   * The index of the pressed button. (Number) Note that the index uses one-based indexing, so the value is 1, 2, 3, etc.
   */
  buttonIndex : number,

  /**
   * The text entered in the prompt dialog box. (String)
   */
  input1 : string

}


/**
 * @name Dialogs
 * @description
 *
 * Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'https://github.com/apache/cordova-plugin-dialogs.git',
  pluginRef: 'navigator.notification'
})
export class Dialogs {

  /**
   * Shows a custom alert or dialog box.
   * @param message Dialog message. (String)
   * @param title Dialog title. (String) (Optional, defaults to Alert)
   * @param buttonName Button name. (String) (Optional, defaults to OK)
   * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 4
  })
  static alert(message, title : string = 'Alert', buttonName : string = 'OK') : Promise<any>{
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Displays a customizable confirmation dialog box.
   * @param message Dialog message. (String)
   * @param title Dialog title. (String) (Optional, defaults to Confirm)
   * @param buttonLabels Array of strings specifying button labels. (Array) (Optional, defaults to [OK,Cancel])
   * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked. Note that the index use one-based indexing.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 4
  })
  static confirm(message, title : string = 'Confirm', buttonLabels : Array<string> = ['OK', 'Cancel']) : Promise<number>{
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<number>((res, rej) => {});
  }

  /**
   * Displays a native dialog box that is more customizable than the browser's prompt function.
   * @param message Dialog message. (String)
   * @param title Dialog title (String) (Optional, defaults to Prompt)
   * @param buttonLabels  Array of strings specifying button labels (Array) (Optional, defaults to ["OK","Cancel"])
   * @param defaultText Default textbox input value (String) (Optional, Default: empty string)
   * @returns {Promise<any>} Returns a promise that resolves an object with the button index clicked and the text entered
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 5
  })
  static prompt(message, title : string = 'Prompt', buttonLabels : Array<string> = ['OK', 'Cancel'], defaultText : string = '') : Promise<any>{
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }


  /**
   * The device plays a beep sound.
   * @param times The number of times to repeat the beep. (Number)
   */
  @Cordova({
    sync: true
  })
  static beep(times : number) : void {}

}