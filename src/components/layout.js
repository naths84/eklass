import React, { Suspense } from 'react';
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header"

import './i18n';

const Layout = (props) => {
  return (
    <Suspense fallback={null}>
        <div>
            <Header />
                { props.children }
            <Footer />
        </div>
    </Suspense>
        
  )
}

export default Layout