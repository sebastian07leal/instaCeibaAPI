import { UserPost } from '../src/domain/userPost/userPost';

describe('Clase de UserPost', () => {

  it('Deb crear el objeto UserPost de forma correcta', () => {
    const post = new UserPost(
      2,
      'sebastian',
      'test',
      'https://images.pexels.com'
    );

    expect(post.getLikes()).toEqual(2);
    expect(post.getTitle()).toEqual('sebastian');
    expect(post.getCommnet()).toEqual('test');
    expect(post.getUrl()).toEqual('https://images.pexels.com');
  

  });


});