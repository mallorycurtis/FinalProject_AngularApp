'use strict';

describe('Service: scroller', function () {

  // load the service's module
  beforeEach(module('finalProjectAngularAppApp'));

  // instantiate service
  var scroller;
  beforeEach(inject(function (_scroller_) {
    scroller = _scroller_;
  }));

  it('should do something', function () {
    expect(!!scroller).toBe(true);
  });

});
