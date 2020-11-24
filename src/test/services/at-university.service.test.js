// Constants
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

// AT University Service API
const tutorialServiceAPI = 'https://at-university-api.herokuapp.com/api' + '/v1/course';
const tutorialServiceAPI_400 = 'https://at-university-api.herokuapp.com/api' + '/v1/courses';

/**
 * AT University Service Integration Test
 * 
 */
describe('INTEGRATION TEST: at-univeristy.service', () => {

    it('Should Get All Courses - 200', (done) => {
        chai.request(tutorialServiceAPI)
            .get('/')
            .end(function(err, res) {
                //console.log(res.body);

                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });

    it('Should Fail Get All Courses - 400', (done) => {
        chai.request(tutorialServiceAPI_400)
            .get('/')
            .end(function(err, res) {
                console.log(res.body)

                // Response Status
                expect(res).to.have.status(404);

                // Response message
                expect(res).to.have.property('body');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('status').equals(404);
                expect(res.body).to.have.property('error');
                expect(res.body).to.have.property('error').equals('Not Found');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('message').equals('');
                expect(res.body).to.have.property('path');
                expect(res.body).to.have.property('path').equals('/api/v1/courses/');

                done();
            });
    });

});