const sinon = require("sinon");
const chai = require("chai");
const expect = require("chai").expect;
const assert = require("assert");

const universityController = require("../../controllers/at-university.controller");
const universityServiceAPI = require("../../services/at-university.service");

describe('TEST: at-univeristy.controller', () => {

    let getAllCoursesStub;

    beforeEach(function() {
        getAllCoursesStub = sinon.stub(universityServiceAPI, "getAllTutorials");
    });

    afterEach(function() {
        getAllCoursesStub.restore();
    });

    it('Should Dashboard Get All Courses - 200', (done) => {
        var res = { render: sinon.spy() };
        var req = {};
        var view = universityController.dashboard(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it('Should Career Details success render - 200', function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = universityController.careerDetails(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it('Should Course Details success render - 200', function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = universityController.courseDetails(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it('Should Start Course success render - 200', function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = universityController.startCourse(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

});