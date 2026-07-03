import{B as a,a1 as e}from"./iframe-DM1-5urk.js";import{B as i}from"./Badge-DqM8N5Dw.js";import{F as t}from"./Cog6ToothIcon-DRwK8QRA.js";import{F as b}from"./TrashIcon-B2qZKsMv.js";import"./preload-helper-Ct5FWWRu.js";const f={fullWidth:{kzqmXN:"xh8yej3",$$css:!0},tallPadding:{k8WAf4:"xqp6ajr",kLKAdn:null,kGO01o:null,$$css:!0}},D={title:"Core/Button",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Accessible label (required)"},variant:{control:"select",options:["primary","secondary","ghost","destructive"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},isLoading:{control:"boolean",description:"Loading state"},isDisabled:{control:"boolean",description:"Disabled state"},endContent:{control:!1,description:"Content rendered after the label (e.g. icon, badge)"}}},s={args:{label:"Primary Button",variant:"primary"}},l={args:{label:"Secondary Button",variant:"secondary"}},o={args:{label:"Ghost Button",variant:"ghost"}},d={args:{label:"Delete",variant:"destructive"}},c={args:{label:"Loading...",variant:"primary",isLoading:!0}},p={args:{label:"Disabled",variant:"primary",isDisabled:!0}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Small",variant:"primary",size:"sm"}),e.jsx(a,{label:"Medium",variant:"primary",size:"md"}),e.jsx(a,{label:"Large",variant:"primary",size:"lg"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"Settings",variant:"ghost",icon:e.jsx(t,{style:{width:16,height:16}}),isIconOnly:!0}),e.jsx(a,{label:"Delete",variant:"destructive",icon:e.jsx(b,{style:{width:16,height:16}}),isIconOnly:!0})]})},h={name:"Padding grows the button (#3379)",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{label:"Default lg",variant:"primary",size:"lg"}),e.jsx(a,{label:"lg + paddingBlock override",variant:"primary",size:"lg",xstyle:f.tallPadding})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"Settings",variant:"secondary",icon:e.jsx(t,{style:{width:16,height:16}})}),e.jsx(a,{label:"Delete",variant:"destructive",icon:e.jsx(b,{style:{width:16,height:16}})})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Messages",variant:"primary",endContent:e.jsx(i,{variant:"info",label:3})}),e.jsx(a,{label:"Notifications",variant:"secondary",endContent:e.jsx(i,{variant:"neutral",label:"New"})})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Settings",variant:"secondary",icon:e.jsx(t,{style:{width:16,height:16}}),endContent:e.jsx(i,{variant:"info",label:"New"})}),e.jsx(a,{label:"Delete",variant:"destructive",icon:e.jsx(b,{style:{width:16,height:16}}),endContent:e.jsx(i,{variant:"error",label:5})})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"600px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"Primary",variant:"primary"}),e.jsx(a,{label:"Secondary",variant:"secondary"}),e.jsx(a,{label:"Ghost",variant:"ghost"}),e.jsx(a,{label:"Destructive",variant:"destructive"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"Loading...",variant:"primary",isLoading:!0}),e.jsx(a,{label:"Loading...",variant:"secondary",isLoading:!0}),e.jsx(a,{label:"Loading...",variant:"ghost",isLoading:!0}),e.jsx(a,{label:"Loading...",variant:"destructive",isLoading:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"Disabled",variant:"primary",isDisabled:!0}),e.jsx(a,{label:"Disabled",variant:"secondary",isDisabled:!0}),e.jsx(a,{label:"Disabled",variant:"ghost",isDisabled:!0}),e.jsx(a,{label:"Disabled",variant:"destructive",isDisabled:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"Settings",variant:"ghost",icon:e.jsx(t,{style:{width:16,height:16}}),isIconOnly:!0}),e.jsx(a,{label:"Settings",variant:"secondary",icon:e.jsx(t,{style:{width:16,height:16}})}),e.jsx(a,{label:"Delete",variant:"destructive",icon:e.jsx(b,{style:{width:16,height:16}}),isIconOnly:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Small",variant:"primary",size:"sm"}),e.jsx(a,{label:"Medium",variant:"primary",size:"md"}),e.jsx(a,{label:"Large",variant:"primary",size:"lg"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{label:"With Badge",variant:"primary",endContent:e.jsx(i,{variant:"info",label:3})}),e.jsx(a,{label:"With Badge",variant:"secondary",endContent:e.jsx(i,{variant:"neutral",label:"New"})}),e.jsx(a,{label:"Icon + Badge",variant:"ghost",icon:e.jsx(t,{style:{width:16,height:16}}),endContent:e.jsx(i,{variant:"info",label:5}),children:"Settings"})]})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Visit Example",href:"https://example.com",variant:"primary"}),e.jsx(a,{label:"Open in new tab",href:"https://example.com",target:"_blank",rel:"noopener noreferrer",variant:"secondary"}),e.jsx(a,{label:"Ghost link",href:"https://example.com",variant:"ghost"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Disabled link",href:"https://example.com",variant:"primary",isDisabled:!0}),e.jsx(a,{label:"Loading link",href:"https://example.com",variant:"primary",isLoading:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{label:"Settings",href:"https://example.com",variant:"secondary",icon:e.jsx(t,{style:{width:16,height:16}})}),e.jsx(a,{label:"Icon-only link",href:"https://example.com",variant:"ghost",icon:e.jsx(t,{style:{width:16,height:16}}),isIconOnly:!0})]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"200px container — label truncates with ellipsis"}),e.jsx("div",{style:{width:200,border:"1px dashed #ccc",padding:4},children:e.jsx(a,{label:"A very long button label that overflows",variant:"primary",icon:e.jsx(t,{style:{width:16,height:16}}),isIconOnly:!0})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Flex row with limited space — button shrinks gracefully"}),e.jsxs("div",{style:{display:"flex",gap:8,maxWidth:320},children:[e.jsx("div",{style:{flex:1,minWidth:0},children:e.jsx(a,{label:"Submit this extremely long form action",variant:"primary",xstyle:f.fullWidth})}),e.jsx(a,{label:"Cancel",variant:"secondary"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#666",marginBottom:8},children:"Unconstrained — renders at natural width"}),e.jsx(a,{label:"A very long button label that shows fully",variant:"primary",icon:e.jsx(t,{style:{width:16,height:16}}),isIconOnly:!0})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button',
    variant: 'ghost'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'destructive'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    variant: 'primary',
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    variant: 'primary',
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button label="Small" variant="primary" size="sm" />
      <Button label="Medium" variant="primary" size="md" />
      <Button label="Large" variant="primary" size="lg" />
    </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>
      <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon style={{
      width: 16,
      height: 16
    }} />} isIconOnly />
      <Button label="Delete" variant="destructive" icon={<TrashIcon style={{
      width: 16,
      height: 16
    }} />} isIconOnly />
    </div>
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Padding grows the button (#3379)',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button label="Default lg" variant="primary" size="lg" />
      <Button label="lg + paddingBlock override" variant="primary" size="lg" xstyle={buttonStoryStyles.tallPadding} />
    </div>
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>
      <Button label="Settings" variant="secondary" icon={<Cog6ToothIcon style={{
      width: 16,
      height: 16
    }} />} />
      <Button label="Delete" variant="destructive" icon={<TrashIcon style={{
      width: 16,
      height: 16
    }} />} />
    </div>
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button label="Messages" variant="primary" endContent={<Badge variant="info" label={3} />} />
      <Button label="Notifications" variant="secondary" endContent={<Badge variant="neutral" label="New" />} />
    </div>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button label="Settings" variant="secondary" icon={<Cog6ToothIcon style={{
      width: 16,
      height: 16
    }} />} endContent={<Badge variant="info" label="New" />} />
      <Button label="Delete" variant="destructive" icon={<TrashIcon style={{
      width: 16,
      height: 16
    }} />} endContent={<Badge variant="error" label={5} />} />
    </div>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '600px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Ghost" variant="ghost" />
        <Button label="Destructive" variant="destructive" />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        <Button label="Loading..." variant="primary" isLoading />
        <Button label="Loading..." variant="secondary" isLoading />
        <Button label="Loading..." variant="ghost" isLoading />
        <Button label="Loading..." variant="destructive" isLoading />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        <Button label="Disabled" variant="primary" isDisabled />
        <Button label="Disabled" variant="secondary" isDisabled />
        <Button label="Disabled" variant="ghost" isDisabled />
        <Button label="Disabled" variant="destructive" isDisabled />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon style={{
        width: 16,
        height: 16
      }} />} isIconOnly />
        <Button label="Settings" variant="secondary" icon={<Cog6ToothIcon style={{
        width: 16,
        height: 16
      }} />} />
        <Button label="Delete" variant="destructive" icon={<TrashIcon style={{
        width: 16,
        height: 16
      }} />} isIconOnly />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Button label="Small" variant="primary" size="sm" />
        <Button label="Medium" variant="primary" size="md" />
        <Button label="Large" variant="primary" size="lg" />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        <Button label="With Badge" variant="primary" endContent={<Badge variant="info" label={3} />} />
        <Button label="With Badge" variant="secondary" endContent={<Badge variant="neutral" label="New" />} />
        <Button label="Icon + Badge" variant="ghost" icon={<Cog6ToothIcon style={{
        width: 16,
        height: 16
      }} />} endContent={<Badge variant="info" label={5} />}>
          Settings
        </Button>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Button label="Visit Example" href="https://example.com" variant="primary" />
        <Button label="Open in new tab" href="https://example.com" target="_blank" rel="noopener noreferrer" variant="secondary" />
        <Button label="Ghost link" href="https://example.com" variant="ghost" />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Button label="Disabled link" href="https://example.com" variant="primary" isDisabled />
        <Button label="Loading link" href="https://example.com" variant="primary" isLoading />
      </div>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Button label="Settings" href="https://example.com" variant="secondary" icon={<Cog6ToothIcon style={{
        width: 16,
        height: 16
      }} />} />
        <Button label="Icon-only link" href="https://example.com" variant="ghost" icon={<Cog6ToothIcon style={{
        width: 16,
        height: 16
      }} />} isIconOnly />
      </div>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"Demonstrates button rendering as a link when `href` is provided.\nRight-click to verify native browser link context menu (open in new tab, etc.).\nDisabled state falls back to `<button>` — disabled links are an a11y anti-pattern.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>
          200px container — label truncates with ellipsis
        </p>
        <div style={{
        width: 200,
        border: '1px dashed #ccc',
        padding: 4
      }}>
          <Button label="A very long button label that overflows" variant="primary" icon={<Cog6ToothIcon style={{
          width: 16,
          height: 16
        }} />} isIconOnly />
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>
          Flex row with limited space — button shrinks gracefully
        </p>
        <div style={{
        display: 'flex',
        gap: 8,
        maxWidth: 320
      }}>
          <div style={{
          flex: 1,
          minWidth: 0
        }}>
            <Button label="Submit this extremely long form action" variant="primary" xstyle={buttonStoryStyles.fullWidth} />
          </div>
          <Button label="Cancel" variant="secondary" />
        </div>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>
          Unconstrained — renders at natural width
        </p>
        <Button label="A very long button label that shows fully" variant="primary" icon={<Cog6ToothIcon style={{
        width: 16,
        height: 16
      }} />} isIconOnly />
      </div>
    </div>
}`,...n.parameters?.docs?.source},description:{story:`Demonstrates button text truncation in constrained containers.
When a button's container is narrower than the button's natural width,
the label truncates with an ellipsis instead of wrapping to multiple lines.`,...n.parameters?.docs?.description}}};const L=["Primary","Secondary","Ghost","Destructive","Loading","Disabled","SizeVariants","IconOnly","PaddingComposesWithHeight","IconWithText","WithEndSlot","IconAndEndSlot","AllVariants","LinkButton","Truncation"];export{u as AllVariants,d as Destructive,p as Disabled,o as Ghost,x as IconAndEndSlot,y as IconOnly,m as IconWithText,r as LinkButton,c as Loading,h as PaddingComposesWithHeight,s as Primary,l as Secondary,g as SizeVariants,n as Truncation,v as WithEndSlot,L as __namedExportsOrder,D as default};
