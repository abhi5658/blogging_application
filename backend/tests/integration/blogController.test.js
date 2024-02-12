const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../../src/app');
const uuidV4 = require('uuid').v4;

chai.use(chaiHttp);

describe('# blogController', () => {
    describe('GET /blogs/:id', () => {
        it('server should respond 200 with analysis', (done) => {
            chai.request(server)
                .get('/blogs/1')
                .end((err, res) => {
                    expect(res.status).to.be.eql(200);
                    expect(res.body).is.not.null;
                    expect(res.body.message).is.equal('success');
                    expect(res.body.blog.id).is.equal(1);
                    done();
                });
        });
    });

    describe('POST /blog', () => {
        it('server should respond 200', (done) => {
            const blog = {
                uuid: uuidV4(),
                title: 'New The Impact of Artificial Intelligence on Healthcare',
                image: 'https://picsum.photos/seed/9/500/300',
                body: `NEW Discover the transformative potential of AI in healthcare. From diagnosing diseases to personalizing treatment plans, AI is revolutionizing patient care. This blog explores how AI technologies like machine learning and natural language processing are reshaping the healthcare landscape, improving outcomes, and saving lives.`,
                author: 'John Doe',
            }
            chai.request(server)
                .post('/blog',)
                .send(blog)
                .end((err, res) => {
                    expect(res.status).to.be.eql(200);
                    expect(res.body).is.not.null;
                    expect(res.body.message).is.equal('success');
                    expect(res.body.blog).is.not.null;
                    expect(res.body.blog.uuid).is.equal(blog.uuid);
                    expect(res.body.blog.id).is.equal(9);
                    done();
                });
        });
    });
});