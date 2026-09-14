import { useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import shell from '../../site/shell.json';

export default function SiteLayout({children}) {
  const [open,setOpen]=useState(false);
  const menu=useRef(null);
  return <div className="site-v2-shell inner-page" onKeyDown={event=>{if(event.key==='Escape'&&open){setOpen(false);menu.current?.focus();}}}>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
      <link rel="stylesheet" href="/site-shell.css" />
      <link rel="stylesheet" href="/site-runtime.css" />
      <link rel="stylesheet" href="/assessment-ui.css" />
    </Head>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><nav className="nav" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="Ergofect home">Ergofect<span className="brand-mark">.</span></a>
      <div id="nav-links" className={'nav-links'+(open?' is-open':'')}>
        {[['Expertise','/services'],['In practice','/#solutions'],['Our process','/process'],['Evidence','/case-studies'],['About','/about']].map(([label,href])=><a key={href} href={href}>{label}</a>)}
      </div>
      <div className="nav-actions"><a className="btn btn-ghost" href="/contact">Let’s talk <span aria-hidden="true">→</span></a><button ref={menu} type="button" className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="nav-links" onClick={()=>setOpen(!open)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={open?'M6 6l12 12M6 18 18 6':'M5 8h14M5 16h14'}/></svg></button></div>
    </nav></header>
    {children}
    <div className="content-section site-footer"><div dangerouslySetInnerHTML={{__html:shell.footer}}/><div className="copyright"><span>© 2026 Ergofect. All rights reserved.</span><span>A workflow. An owner. A measured result.</span></div></div>
    <Script src="/site-runtime.js" strategy="afterInteractive"/>
  </div>;
}
