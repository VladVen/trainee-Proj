import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'next, test, trainee' + keywords}></meta>
                <title>Next JS</title>
            </Head>

            <div className={'navLink'}>
                <A href={'/'} text={'Main'}/>
                <A href={'/users'} text={'Users'}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navLink {
                    background: #cccccc;
                    padding: 15px;
                    border-radius: 0 0 10px 10px;
                  }

                `}
            </style>
        </>
    );
};

export default MainContainer;