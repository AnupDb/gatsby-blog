import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const PostPreview = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excert}</p>
    <Link to={post.slug}>read this post &rarr;</Link>
  </article>
)

export default PostPreview
