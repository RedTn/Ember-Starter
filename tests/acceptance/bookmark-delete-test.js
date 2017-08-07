import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bookmark delete');

test('visiting /bookmark-delete', function(assert) {
    let user = server.create('user', {});
    let bookmark = server.create('bookmark', {
        title: 'Title Bookmark',
        userId: user.id
    });
    visit(`/bookmarks/edit/${bookmark.id}`);
    click('button#delete');
    andThen(() => {
        assert.equal(currentURL(), '/bookmarks');
    })
});
