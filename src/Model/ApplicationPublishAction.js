/**
 * Agave Platform Science API
 * Power your digital lab and reduce the time from theory to discovery using the Agave Science-as-a-Service API Platform. Agave provides hosted services that allow researchers to manage data, conduct experiments, and publish and share results from anywhere at any time.
 *
 * OpenAPI spec version: 2.2.14
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'Model/ApplicationAction', 'Model/ApplicationActionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApplicationAction'), require('./ApplicationActionType'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.ApplicationPublishAction = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.ApplicationAction, root.AgaveJsSdk.ApplicationActionType);
  }
}(this, function(ApiClient, ApplicationAction, ApplicationActionType) {
  'use strict';




  /**
   * The ApplicationPublishAction model module.
   * @module Model/ApplicationPublishAction
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ApplicationPublishAction</code>.
   * Publishes an app into the public space for anyone to use.
   * @alias module:Model/ApplicationPublishAction
   * @class
   * @implements module:Model/ApplicationAction
   * @param action {module:Model/ApplicationActionType} 
   */
  var exports = function(action) {
    var _this = this;

    ApplicationAction.call(_this, action);
  };

  /**
   * Constructs a <code>ApplicationPublishAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/ApplicationPublishAction} obj Optional instance to populate.
   * @return {module:Model/ApplicationPublishAction} The populated <code>ApplicationPublishAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ApplicationAction.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ApplicationAction interface:
  /**
   * @member {module:Model/ApplicationActionType} action
   */
exports.prototype['action'] = undefined;



  return exports;
}));

