const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/Gabriel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const url=process.argv[2]||'http://127.0.0.1:4186/';
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const all=[];const resourceErrors=[];const consoleErrors=[];
 for(const width of [360,390,768,1440]){
  const context=await browser.newContext({viewport:{width,height:width>1000?1000:844},deviceScaleFactor:1,reducedMotion:'reduce'});
  const page=await context.newPage();
  page.on('pageerror',e=>consoleErrors.push(e.message));
  page.on('response',r=>{if(r.url().startsWith(new URL(url).origin)&&r.status()>=400)resourceErrors.push({url:r.url(),status:r.status()})});
  const response=await page.goto(url,{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await page.locator('footer').scrollIntoViewIfNeeded();await page.waitForTimeout(300);
  const state=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,images:[...document.images].map(i=>({src:i.currentSrc,loaded:i.complete&&i.naturalWidth>0,width:i.naturalWidth})),robots:document.querySelector('meta[name=robots]').content,anchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.querySelector(a.getAttribute('href'))).map(a=>a.getAttribute('href')),title:document.title,fonts:document.fonts.status}));
  assert.equal(state.scrollWidth,width,'Horizontal overflow at '+width);assert.ok(state.images.every(i=>i.loaded),'Images load at '+width);assert.equal(state.robots,'noindex, nofollow');assert.equal(state.anchors.length,0);
  await page.evaluate(()=>scrollTo(0,0));
  await page.keyboard.press('Tab');assert.equal(await page.locator('.skip-link').evaluate(e=>e===document.activeElement),true);
  if(width<=760){await page.locator('.menu-toggle').click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');assert.equal(await page.locator('.menu-toggle').evaluate(e=>e===document.activeElement),true)}
  await page.locator('#antes-de-vir').scrollIntoViewIfNeeded();await page.locator('details').nth(2).locator('summary').click();assert.equal(await page.locator('details').nth(2).getAttribute('open'),'');
  await page.evaluate(()=>{document.activeElement.blur();scrollTo(0,0)});await page.screenshot({path:'.qa/'+(url.includes('127.0.0.1')?'local':'public')+'-'+width+'.png',fullPage:true});
  all.push({viewport:width,status:'PASS',...state});
  await context.close();
 }
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const np=await nojs.newPage();await np.goto(url);assert.equal(await np.locator('#navigation').isVisible(),true);await nojs.close();
 const zoom=await browser.newContext({viewport:{width:390,height:844}});const zp=await zoom.newPage();await zp.goto(url);await zp.evaluate(()=>document.documentElement.style.fontSize='200%');const zw=await zp.evaluate(()=>({w:innerWidth,s:document.documentElement.scrollWidth}));assert.equal(zw.s,zw.w,'200% text overflow');await zoom.close();
 assert.equal(resourceErrors.length,0,'Resource errors');assert.equal(consoleErrors.length,0,'JavaScript errors');
 fs.writeFileSync('.qa/'+(url.includes('127.0.0.1')?'local':'public')+'-results.json',JSON.stringify({url,date:new Date().toISOString(),viewports:all,resourceErrors,consoleErrors,noJavaScript:'PASS',text200percent:'PASS'},null,2));
 await browser.close();console.log(JSON.stringify({url,viewports:all.map(s=>({width:s.width,status:s.status})),resources:'PASS',keyboard:'PASS',menu:'PASS',faq:'PASS',noJavaScript:'PASS',text200percent:'PASS'}));
})().catch(e=>{console.error(e);process.exit(1)});
