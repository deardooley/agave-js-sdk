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
    define(['ApiClient', 'Model/TagResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagResource'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.Tag = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.TagResource);
  }
}(this, function(ApiClient, TagResource) {
  'use strict';




  /**
   * The Tag model module.
   * @module Model/Tag
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Tag</code>.
   * Base tag object
   * @alias module:Model/Tag
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/Tag} obj Optional instance to populate.
   * @return {module:Model/Tag} The populated <code>Tag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [TagResource]);
      }
    }
    return obj;
  }

  /**
   * uuid of this tag
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * name of tag
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Date tag was created
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Date tag was last updated
   * @member {Date} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * The list of resource uuid associated with this tag
   * @member {Array.<module:Model/TagResource>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));

