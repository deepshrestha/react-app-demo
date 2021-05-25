import React from 'react';
import './Post.css';

const Post = (props) => {
    const { postTitle, name } = props
        return (
            <div className="font-text">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title font-weight-bold">{name}</p>
                        <p className="card-text">
                            {postTitle}
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                    <div className="p-2" style={{backgroundColor:"#fff2f2", border: "1px solid #edeaea"}}>
                        <div className="row" style={{marginLeft: 90}}>
                            <div className="col-md-4">
                                <small className="small">
                                    <a href="#"><img title="Like" src="/src/images/like.png" height="20" style={{"WebkitTransform": "scaleX(-1)", "transform": "scaleX(-1)"}} /></a>
                                </small>
                            </div>
                            <div className="col-md-4">
                                <small className="small">
                                    <a href="#"><img title="Comment" src="/src/images/comment.png" height="20" /></a>
                                </small>
                            </div>
                            <div className="col-md-4">
                                <small className="small">
                                    <a href="#"><img title="Share" src="/src/images/share.png" height="20" /></a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
}    

export default Post;
