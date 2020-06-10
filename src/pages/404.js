import React from "react"
import {Link} from "gatsby"

import SEO from "../components/seo";

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p><Link to = "/">Back to main</Link></p>
  </div>
)

export default NotFoundPage
