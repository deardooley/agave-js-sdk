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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AgaveJsSdk);
  }
}(this, function(expect, AgaveJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AgaveJsSdk.JobsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JobsApi', function() {
    describe('addJobPermission', function() {
      it('should call addJobPermission successfully', function(done) {
        //uncomment below and update the code to test addJobPermission
        //instance.addJobPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearJobPermissions', function() {
      it('should call clearJobPermissions successfully', function(done) {
        //uncomment below and update the code to test clearJobPermissions
        //instance.clearJobPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJob', function() {
      it('should call deleteJob successfully', function(done) {
        //uncomment below and update the code to test deleteJob
        //instance.deleteJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobPermission', function() {
      it('should call deleteJobPermission successfully', function(done) {
        //uncomment below and update the code to test deleteJobPermission
        //instance.deleteJobPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadJobOutput', function() {
      it('should call downloadJobOutput successfully', function(done) {
        //uncomment below and update the code to test downloadJobOutput
        //instance.downloadJobOutput(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobDetails', function() {
      it('should call getJobDetails successfully', function(done) {
        //uncomment below and update the code to test getJobDetails
        //instance.getJobDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobHistory', function() {
      it('should call getJobHistory successfully', function(done) {
        //uncomment below and update the code to test getJobHistory
        //instance.getJobHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobPermission', function() {
      it('should call getJobPermission successfully', function(done) {
        //uncomment below and update the code to test getJobPermission
        //instance.getJobPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobStatus', function() {
      it('should call getJobStatus successfully', function(done) {
        //uncomment below and update the code to test getJobStatus
        //instance.getJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJobOutputs', function() {
      it('should call listJobOutputs successfully', function(done) {
        //uncomment below and update the code to test listJobOutputs
        //instance.listJobOutputs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJobPermissions', function() {
      it('should call listJobPermissions successfully', function(done) {
        //uncomment below and update the code to test listJobPermissions
        //instance.listJobPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJobs', function() {
      it('should call listJobs successfully', function(done) {
        //uncomment below and update the code to test listJobs
        //instance.listJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resubmitJob', function() {
      it('should call resubmitJob successfully', function(done) {
        //uncomment below and update the code to test resubmitJob
        //instance.resubmitJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitJob', function() {
      it('should call submitJob successfully', function(done) {
        //uncomment below and update the code to test submitJob
        //instance.submitJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJobPermission', function() {
      it('should call updateJobPermission successfully', function(done) {
        //uncomment below and update the code to test updateJobPermission
        //instance.updateJobPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));