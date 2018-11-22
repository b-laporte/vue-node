const SERVER = `http://localhost:3000`;

class PostService {

  public async getPosts() {
    const response = await fetch(`${SERVER}/posts`, {
      credentials: 'include'
    });
    return await response.json();
  }

  public async deletePost(id: string) {
    const response = await fetch(`${SERVER}/posts/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return await response.json();
  }

  public async createPost(text: string) {
    const response = await fetch(`${SERVER}/posts`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ text}),
      credentials: 'include'
    });
    return await response.json();
  }
}

export const postService = new PostService();
