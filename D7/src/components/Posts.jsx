import PropTypes from 'prop-types';

export const Posts = ({seePosts}) => {
    return(
        <div id="posts">
            {seePosts.length > 0 ?
        <table border={1}>
            <thead>
                <tr>
                    <th>User id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {seePosts.map(post=> {
                    return(
                        <tr key={post}>
                            <td>{post.userid}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> : <p>POSTS</p>
        }

        </div>
    )
}



Posts.propTypes={
    seePosts: PropTypes.arrayOf(PropTypes.object)
}