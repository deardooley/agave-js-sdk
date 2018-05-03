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
    define(['ApiClient', 'Model/SystemAuthConfig', 'Model/SystemStorageProtocolType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SystemAuthConfig'), require('./SystemStorageProtocolType'));
  } else {
    // Browser globals (root is window)
    if (!root.AgaveJsSdk) {
      root.AgaveJsSdk = {};
    }
    root.AgaveJsSdk.SystemStorageConfig = factory(root.AgaveJsSdk.ApiClient, root.AgaveJsSdk.SystemAuthConfig, root.AgaveJsSdk.SystemStorageProtocolType);
  }
}(this, function(ApiClient, SystemAuthConfig, SystemStorageProtocolType) {
  'use strict';




  /**
   * The SystemStorageConfig model module.
   * @module Model/SystemStorageConfig
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SystemStorageConfig</code>.
   * @alias module:Model/SystemStorageConfig
   * @class
   * @param auth {module:Model/SystemAuthConfig} 
   * @param host {String} The hostname or ip address of the storage server
   * @param port {Number} The port number of the storage server.
   * @param protocol {module:Model/SystemStorageProtocolType} 
   */
  var exports = function(auth, host, port, protocol) {
    var _this = this;

    _this['auth'] = auth;


    _this['host'] = host;
    _this['port'] = port;

    _this['protocol'] = protocol;




  };

  /**
   * Constructs a <code>SystemStorageConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:Model/SystemStorageConfig} obj Optional instance to populate.
   * @return {module:Model/SystemStorageConfig} The populated <code>SystemStorageConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auth')) {
        obj['auth'] = SystemAuthConfig.constructFromObject(data['auth']);
      }
      if (data.hasOwnProperty('containerName')) {
        obj['containerName'] = ApiClient.convertToType(data['containerName'], 'String');
      }
      if (data.hasOwnProperty('homeDir')) {
        obj['homeDir'] = ApiClient.convertToType(data['homeDir'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'Number');
      }
      if (data.hasOwnProperty('mirror')) {
        obj['mirror'] = ApiClient.convertToType(data['mirror'], 'Boolean');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = SystemStorageProtocolType.constructFromObject(data['protocol']);
      }
      if (data.hasOwnProperty('publicAppsDir')) {
        obj['publicAppsDir'] = ApiClient.convertToType(data['publicAppsDir'], 'String');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
      if (data.hasOwnProperty('rootDir')) {
        obj['rootDir'] = ApiClient.convertToType(data['rootDir'], 'String');
      }
      if (data.hasOwnProperty('zone')) {
        obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:Model/SystemAuthConfig} auth
   */
  exports.prototype['auth'] = undefined;
  /**
   * The name of the bucket to interact with when using an object store.
   * @member {String} containerName
   */
  exports.prototype['containerName'] = undefined;
  /**
   * The path on the remote system to use as the home directory for all API requests. For cases where the home directory should be dynamically defined, the ${USERNAME} token can be included in the homeDir value to represent the username of the authenticated user. ex. /home/${USERNAME}.
   * @member {String} homeDir
   * @default '/'
   */
  exports.prototype['homeDir'] = '/';
  /**
   * The hostname or ip address of the storage server
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * The port number of the storage server.
   * @member {Number} port
   */
  exports.prototype['port'] = undefined;
  /**
   * Whether the permissions set on the server should be pushed to the storage system itself. This only applies to IRODS and AWS systems.
   * @member {Boolean} mirror
   * @default false
   */
  exports.prototype['mirror'] = false;
  /**
   * @member {module:Model/SystemStorageProtocolType} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * The path on the remote system where apps will be stored if this is set as the default public storage system.
   * @member {String} publicAppsDir
   */
  exports.prototype['publicAppsDir'] = undefined;
  /**
   * The name of the target resource when defining an IRODS system.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * The path on the remote system to use as the root for all API requests.
   * @member {String} rootDir
   * @default '/'
   */
  exports.prototype['rootDir'] = '/';
  /**
   * The name of the zone when defining an IRODS system.
   * @member {String} zone
   */
  exports.prototype['zone'] = undefined;



  return exports;
}));

