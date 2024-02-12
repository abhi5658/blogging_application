const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { createBlog } = require('../../src/services/blogService');
const { Blog } = require('../../src/models');

describe('# blogService', () => {

    describe('createBlog', () => {
        it('should create a blog', async () => {
            const uuid = 'c5aee4a7-a57b-455e-9603-4fbfbada0a5e';
            const title = 'This is a test caption';
            const image = 'https://picsum.photos/seed/6727/200/300';
            const body = 'This is a test body';
            const author = 'Test Author'

            // Stub the Blog.create method to avoid actual database calls
            const createStub = sinon.stub(Blog, 'create').resolves({ uuid, title, image, body, author });

            const blog = await createBlog(uuid, title, image, body, author);

            // Assertions
            expect(blog).to.have.property('uuid', uuid);
            expect(blog).to.have.property('title', title);
            expect(blog).to.have.property('body', body);
            expect(createStub.calledOnceWithExactly({ uuid, title, image, body, author })).to.be.true;

            // Restore stubs
            createStub.restore();
        });
    });
});
