import{ah as t,aJ as X,a1 as l,a6 as $,af as O,ay as T,a3 as _}from"./iframe-y4IrYjEB.js";import{r as B,D as J}from"./renderDropdownItems-Y-kifnAG.js";import{u as N}from"./useListFocus-mokx1W_L.js";import{u as H}from"./useTypeahead-DwYUIJdB.js";const p={menu:{kB7OPa:"astryx9f619",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",kskxy:"astryxuyqlj2",kORKVm:"astryx1odjw0f","--_dropdown-menu-radius":"astryx1fcsqxe","--_dropdown-menu-padding":"astryxgory14",kmVPX3:"astryx9epnlk",kaIpWk:"astryx1n97fys",kWkggS:"astryx1prclbq",kGVxlE:"astryx1i5ehqx",kSiTet:"astryx1hc1fzr",k1ekBW:"astryx19991ni",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",$$css:!0},popover:{k7Eaqz:"astryx5w4yej",$$css:!0},popoverCustomWidth:n=>[{k7Eaqz:(typeof n=="number"?`${n}px`:n)!=null?"astryxkj4a21":typeof n=="number"?`${n}px`:n,$$css:!0},{"--x-minWidth":(o=>typeof o=="number"?o+"px":o??void 0)(typeof n=="number"?`${n}px`:n)}]};function M({children:n,menuWidth:o,size:y="md",label:w="Context menu",hasAutoFocus:x=!0,isDisabled:k=!1,onOpenChange:c,ref:D,className:I,style:q,xstyle:S,"data-testid":j,...u}){const L=("items"in u?u.items:void 0)??[],R="menuContent"in u?u.menuContent:void 0,V=t.useId(),d=t.useRef({x:0,y:0}),f=t.useRef(null),[m,v]=t.useState(!1),i=X({mode:"fixed",onHide:t.useCallback(()=>{v(!1),c?.(!1);const e=f.current;f.current=null,e&&document.contains(e)&&e.focus()},[c]),onShow:t.useCallback(()=>{v(!0),c?.(!0)},[c]),lightDismiss:!1}),r=t.useCallback(()=>{i.hide()},[i]),{listRef:a,handleKeyDown:C,focusFirst:b,focusItem:A}=N({itemSelector:'[role="menuitem"]:not([aria-disabled="true"])',wrap:!1,onEscape:r}),h=t.useCallback(()=>a.current?Array.from(a.current.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')):[],[a]),E=H({getItemLabels:()=>h().map(e=>e.textContent),onMatch:A,getCurrentIndex:()=>h().findIndex(e=>e===document.activeElement||e.contains(document.activeElement))});t.useEffect(()=>{if(!m)return;const e=s=>{const g=a.current;g&&!g.contains(s.target)&&r()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[m,r,a]),t.useEffect(()=>{if(!m)return;const e=s=>{s.key==="Escape"&&(s.isComposing||s.keyCode===229||(s.preventDefault(),r()))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[m,r]);const z=t.useCallback(e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();const s=document.activeElement;s?.getAttribute("role")==="menuitem"&&s.click();return}if(E.onKeyDown(e)){e.preventDefault();return}C(e)},[C,E]),F=t.useCallback(e=>{k||(e.preventDefault(),d.current={x:e.clientX,y:e.clientY},f.current=document.activeElement instanceof HTMLElement?document.activeElement:e.currentTarget,i.show(),x&&requestAnimationFrame(()=>b()))},[k,i,x,b]),K=o?p.popoverCustomWidth(o):p.popover,P=t.useMemo(()=>({closeMenu:r,menuSize:y}),[r,y]),W=u.items!==void 0?B(L):R;return l.jsxs(l.Fragment,{children:[l.jsx("div",{ref:D,onContextMenu:F,"data-testid":j,children:n}),i.render(l.jsx("div",{ref:a,id:V,role:"menu","aria-label":w,onKeyDown:z,...$(T("context-menu"),O(p.menu,S),I,q),children:l.jsx(J,{value:P,children:W})}),{x:d.current.x,y:d.current.y,xstyle:[K,_.below]})]})}M.displayName="ContextMenu";M.__docgenInfo={description:`A context menu component that appears on right-click at cursor position.

Supports two modes:
- **Data-driven**: pass \`items\` for static menus
- **Compound-component**: pass \`menuContent\` JSX for dynamic menus

Both modes share the same DOM-based keyboard navigation via useListFocus.

@example
\`\`\`
<ContextMenu
  items={[
    { label: 'Cut', onClick: () => handleCut() },
    { label: 'Copy', onClick: () => handleCopy() },
    { type: 'divider' },
    { label: 'Paste', onClick: () => handlePaste() },
  ]}
>
  <div>Right-click this area</div>
</ContextMenu>
\`\`\``,methods:[],displayName:"ContextMenu",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},label:{defaultValue:{value:"'Context menu'",computed:!1},required:!1},hasAutoFocus:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{M as C};
