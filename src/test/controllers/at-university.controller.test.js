const assert = require('assert');
const expect = require('chai').expect;

const universityController = require("../../controllers/at-university.controller");

describe('Dashboard - Get All Courses - 200: ', () => {
    it('Should Dashboard Get All Courses - 200', (done) => {

        universityController.dashboard()
            .end(function(err, res) {
                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });
});

describe('Career Details - 200: ', () => {
    it('Should Career Details success render - 200', (done) => {

        universityController.careerDetails()
            .end(function(err, res) {
                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });
});

describe('Course Details - 200: ', () => {
    it('Should Course Details success render - 200', (done) => {

        universityController.courseDetails()
            .end(function(err, res) {
                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });
});

describe('Start Course Details - 200: ', () => {
    it('Should Start Course success render - 200', (done) => {

        universityController.startCourse()
            .end(function(err, res) {
                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });
});