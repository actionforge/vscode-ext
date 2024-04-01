    <span
        part="end"
        ${(0,e0.i)("endContainer")}
        class=${P0=>U.end?"end":void 0}
    >
        <slot name="end" ${(0,e0.i)("end")} @slotchange="${P0=>P0.handleEndContentChange()}">
            ${U.end||""}
        </slot>
    </span>
`,c0=(W0,U)=>y.d`
    <span
        part="start"
        ${(0,e0.i)("startContainer")}
        class="${P0=>U.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,e0.i)("start")}
            @slotchange="${P0=>P0.handleStartContentChange()}"
        >
            ${U.start||""}
        </slot>
    </span>
`;y.d`
    <span part="end" ${(0,e0.i)("endContainer")}>
        <slot
            name="end"
            ${(0,e0.i)("end")}
            @slotchange="${W0=>W0.handleEndContentChange()}"
        ></slot>
    </span>
`,y.d`
    <span part="start" ${(0,e0.i)("startContainer")}>
        <slot
            name="start"
            ${(0,e0.i)("start")}
            @slotchange="${W0=>W0.handleStartContentChange()}"
        ></slot>
    </span>
	${(0,Q2.j)("inline-flex")} :host {
		outline: none;
		font-family: ${r1.I8};
		font-size: ${r1.cS};
		line-height: ${r1.RU};
		color: ${r1.k$};
		background: ${r1.dd};
		border-radius: calc(${r1.Rm} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${r1.z8} ${r1.W0};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${r1.J4} * 1px) solid ${r1.GY};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${r1.$O};
	}
	:host(:active) {
		background: ${r1.dd};
	}
	.control:${c1.b} {
		outline: calc(${r1.J4} * 1px) solid ${r1.R8};
		outline-offset: calc(${r1.J4} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${r1.VF};
		background: ${r1.dd};
		cursor: ${z1.H};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${r1._5} * 4px);
		height: calc(${r1._5} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,b2=Z2.i`
	:host([appearance='primary']) {
		background: ${r1.dd};
		color: ${r1.k$};
	}
	:host([appearance='primary']:hover) {
		background: ${r1.$O};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${r1.dd};
	}
	:host([appearance='primary']) .control:${c1.b} {
		outline: calc(${r1.J4} * 1px) solid ${r1.R8};
		outline-offset: calc(${r1.J4} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${r1.dd};
	}
`,Y=Z2.i`
	:host([appearance='secondary']) {
		background: ${r1.ES};
		color: ${r1.qB};
	}
	:host([appearance='secondary']:hover) {
		background: ${r1.xE};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${r1.ES};
	}
	:host([appearance='secondary']) .control:${c1.b} {
		outline: calc(${r1.J4} * 1px) solid ${r1.R8};
		outline-offset: calc(${r1.J4} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${r1.ES};
	}
`,x1=Z2.i`
	:host([appearance='icon']) {
		background: ${r1.Tn};
		border-radius: ${r1.O7};
		color: ${r1.dR};
	}
	:host([appearance='icon']:hover) {
		background: ${r1.X3};
		outline: 1px dotted ${r1.M2};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${r1.CZ};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${r1.X3};
	}
	:host([appearance='icon']) .control:${c1.b} {
		outline: calc(${r1.J4} * 1px) solid ${r1.R8};
		outline-offset: ${r1.gJ};
	}
	:host([appearance='icon'][disabled]) {
		background: ${r1.Tn};
	}
`,q1=(()=>{class L1 extends m0{connectedCallback(){if(super.connectedCallback(),!this.appearance){const T=this.getAttribute("appearance");this.appearance=T}}attributeChangedCallback(T,C1,X1){"appearance"===T&&"icon"===X1&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),"aria-label"===T&&(this.ariaLabel=X1),"disabled"===T&&(this.disabled=null!==X1)}}return(0,y.gn)([e0.Lj],L1.prototype,"appearance",void 0),L1})().compose({baseName:"button",template:(L1,k0)=>B0.d`
    <button
        class="control"
        part="control"
        ?autofocus="${T=>T.autofocus}"
        ?disabled="${T=>T.disabled}"
        form="${T=>T.formId}"
        formaction="${T=>T.formaction}"
        formenctype="${T=>T.formenctype}"
        formmethod="${T=>T.formmethod}"
        formnovalidate="${T=>T.formnovalidate}"
        formtarget="${T=>T.formtarget}"
        name="${T=>T.name}"
        type="${T=>T.type}"
        value="${T=>T.value}"
        aria-atomic="${T=>T.ariaAtomic}"
        aria-busy="${T=>T.ariaBusy}"
        aria-controls="${T=>T.ariaControls}"
        aria-current="${T=>T.ariaCurrent}"
        aria-describedby="${T=>T.ariaDescribedby}"
        aria-details="${T=>T.ariaDetails}"
        aria-disabled="${T=>T.ariaDisabled}"
        aria-errormessage="${T=>T.ariaErrormessage}"
        aria-expanded="${T=>T.ariaExpanded}"
        aria-flowto="${T=>T.ariaFlowto}"
        aria-haspopup="${T=>T.ariaHaspopup}"
        aria-hidden="${T=>T.ariaHidden}"
        aria-invalid="${T=>T.ariaInvalid}"
        aria-keyshortcuts="${T=>T.ariaKeyshortcuts}"
        aria-label="${T=>T.ariaLabel}"
        aria-labelledby="${T=>T.ariaLabelledby}"
        aria-live="${T=>T.ariaLive}"
        aria-owns="${T=>T.ariaOwns}"
        aria-pressed="${T=>T.ariaPressed}"
        aria-relevant="${T=>T.ariaRelevant}"
        aria-roledescription="${T=>T.ariaRoledescription}"
        ${(0,p1.i)("control")}
    >
        ${(0,b0.m9)(L1,k0)}
        <span class="content" part="content">
            <slot ${(0,Z1.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,b0.LC)(L1,k0)}
    </button>
`,styles:(L1,k0)=>Z2.i`
	${M2}
	${b2}
	${Y}
	${x1}
`,shadowOptions:{delegatesFocus:!0}})},2827:(v3,_1,b)=>{"use strict";b.d(_1,{DD:()=>az});var y=b(7815),e0=b(7138),Q=b(4658);let z0=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const j=`background-color: var(--badge-fill-${this.fill});`,E0=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?j:this.color&&!this.fill?E0:`${E0} ${j}`}}}return(0,y.gn)([(0,e0.Lj)({attribute:"fill"})],N0.prototype,"fill",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"color"})],N0.prototype,"color",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"circular",void 0),N0})();var c0=b(4189);const b0=(N0,d2)=>c0.d`
    <template class="${j=>j.circular?"circular":""}">
        <div class="control" part="control" style="${j=>j.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;var L0=b(6068),W0=b(7450),U=b(2444);const m0=class _0 extends z0{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:b0,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${U.I8};
		font-size: ${U.sN};
		line-height: ${U.vg};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${U.g8};
		border: calc(${U.J4} * 1px) solid ${U.GY};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${U.qe};
		display: flex;
		height: calc(${U._5} * 4px);
		justify-content: center;
		min-width: calc(${U._5} * 4px + 2px);
		min-height: calc(${U._5} * 4px + 2px);
		padding: 3px 6px;
	}
`});var Y0=b(389),B0=b(7726),p1=b(867),Z1=b(3712);class g2 extends Q.I{}class Z2 extends((0,Z1.V2)(g2)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Q2=(()=>{class N0 extends Z2{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=j=>{this.readOnly||j.key!==p1.BI||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=j=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}return(0,y.gn)([(0,e0.Lj)({attribute:"readonly",mode:"boolean"})],N0.prototype,"readOnly",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultSlottedNodes",void 0),(0,y.gn)([B0.LO],N0.prototype,"indeterminate",void 0),N0})();var c1=b(6357),r1=b(8421),M2=b(3987);const x1=class Y extends Q2{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.textContent?this.textContent:"Checkbox")}}.compose({baseName:"checkbox",template:(N0,d2)=>c0.d`
    <template
        role="checkbox"
        aria-checked="${j=>j.checked}"
        aria-required="${j=>j.required}"
        aria-disabled="${j=>j.disabled}"
        aria-readonly="${j=>j.readOnly}"
        tabindex="${j=>j.disabled?null:0}"
        @keypress="${(j,E0)=>j.keypressHandler(E0.event)}"
        @click="${(j,E0)=>j.clickHandler(E0.event)}"
        class="${j=>j.readOnly?"readonly":""} ${j=>j.checked?"checked":""} ${j=>j.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${d2.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${d2.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${j=>j.defaultSlottedNodes&&j.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,c1.Q)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${U._5} * 1px) 0;
		user-select: none;
		font-size: ${U.cS};
		line-height: ${U.RU};
	}
	.control {
		position: relative;
		width: calc(${U._5} * 4px + 2px);
		height: calc(${U._5} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${U.ec} * 1px);
		border: calc(${U.J4} * 1px) solid ${U.nd};
		background: ${U.SU};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${U.I8};
		color: ${U.dR};
		padding-inline-start: calc(${U._5} * 2px + 2px);
		margin-inline-end: calc(${U._5} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${U.dR};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${U.dR};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${U.SU};
		border-color: ${U.nd};
	}
	:host(:enabled) .control:active {
		background: ${U.SU};
		border-color: ${U.R8};
	}
	:host(:${r1.b}) .control {
		border: calc(${U.J4} * 1px) solid ${U.R8};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${M2.H};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${U.VF};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});var f1=b(3309),S1=b(1526);function q1(N0,d2,j){return{index:N0,removed:d2,addedCount:j}}const L1=0,k0=1,T=2,C1=3;function F0(N0,d2,j,E0){return d2<j||E0<N0?-1:d2===j||E0===N0?0:N0<j?d2<E0?d2-j:E0-j:E0<d2?E0-N0:d2-N0}function T1(N0,d2,j,E0,O1,p3){let Fe=0,r4=0;const Ie=Math.min(j-d2,p3-O1);if(0===d2&&0===O1&&(Fe=function K0(N0,d2,j){for(let E0=0;E0<j;++E0)if(N0[E0]!==d2[E0])return E0;return j}(N0,E0,Ie)),j===N0.length&&p3===E0.length&&(r4=function t1(N0,d2,j){let E0=N0.length,O1=d2.length,p3=0;for(;p3<j&&N0[--E0]===d2[--O1];)p3++;return p3}(N0,E0,Ie-Fe)),O1+=Fe,p3-=r4,(j-=r4)-(d2+=Fe)==0&&p3-O1==0)return S1.ow;if(d2===j){const D9=q1(d2,[],0);for(;O1<p3;)D9.removed.push(E0[O1++]);return[D9]}if(O1===p3)return[q1(d2,[],j-d2)];const et=function a3(N0){let d2=N0.length-1,j=N0[0].length-1,E0=N0[d2][j];const O1=[];for(;d2>0||j>0;){if(0===d2){O1.push(T),j--;continue}if(0===j){O1.push(C1),d2--;continue}const p3=N0[d2-1][j-1],Fe=N0[d2-1][j],r4=N0[d2][j-1];let Ie;Ie=Fe<r4?Fe<p3?Fe:p3:r4<p3?r4:p3,Ie===p3?(p3===E0?O1.push(L1):(O1.push(k0),E0=p3),d2--,j--):Ie===Fe?(O1.push(C1),d2--,E0=Fe):(O1.push(T),j--,E0=r4)}return O1.reverse(),O1}(function X1(N0,d2,j,E0,O1,p3){const Fe=p3-O1+1,r4=j-d2+1,Ie=new Array(Fe);let et,Gt;for(let V4=0;V4<Fe;++V4)Ie[V4]=new Array(r4),Ie[V4][0]=V4;for(let V4=0;V4<r4;++V4)Ie[0][V4]=V4;for(let V4=1;V4<Fe;++V4)for(let on=1;on<r4;++on)N0[d2+on-1]===E0[O1+V4-1]?Ie[V4][on]=Ie[V4-1][on-1]:(et=Ie[V4-1][on]+1,Gt=Ie[V4][on-1]+1,Ie[V4][on]=et<Gt?et:Gt);return Ie}(N0,d2,j,E0,O1,p3)),Gt=[];let V4,on=d2,xo=O1;for(let D9=0;D9<et.length;++D9)switch(et[D9]){case L1:void 0!==V4&&(Gt.push(V4),V4=void 0),on++,xo++;break;case k0:void 0===V4&&(V4=q1(on,[],0)),V4.addedCount++,on++,V4.removed.push(E0[xo]),xo++;break;case T:void 0===V4&&(V4=q1(on,[],0)),V4.addedCount++,on++;break;case C1:void 0===V4&&(V4=q1(on,[],0)),V4.removed.push(E0[xo]),xo++}return void 0!==V4&&Gt.push(V4),Gt}const w0=Array.prototype.push;function t0(N0,d2,j,E0){const O1=q1(d2,j,E0);let p3=!1,Fe=0;for(let r4=0;r4<N0.length;r4++){const Ie=N0[r4];if(Ie.index+=Fe,p3)continue;const et=F0(O1.index,O1.index+O1.removed.length,Ie.index,Ie.index+Ie.addedCount);if(et>=0)if(N0.splice(r4,1),r4--,Fe-=Ie.addedCount-Ie.removed.length,O1.addedCount+=Ie.addedCount-et,O1.addedCount||O1.removed.length+Ie.removed.length-et){let V4=Ie.removed;if(O1.index<Ie.index){const on=O1.removed.slice(0,Ie.index-O1.index);w0.apply(on,V4),V4=on}if(O1.index+O1.removed.length>Ie.index+Ie.addedCount){const on=O1.removed.slice(Ie.index+Ie.addedCount-O1.index);w0.apply(V4,on)}O1.removed=V4,Ie.index<O1.index&&(O1.index=Ie.index)}else p3=!0;else if(O1.index<Ie.index){p3=!0,N0.splice(r4,0,O1),r4++;const Gt=O1.addedCount-O1.removed.length;Ie.index+=Gt,Fe+=Gt}}p3||N0.push(O1)}var B1=b(472);let F1=!1;function n2(N0,d2){let j=N0.index;const E0=d2.length;return j>E0?j=E0-N0.addedCount:j<0&&(j=E0+N0.removed.length+j-N0.addedCount),j<0&&(j=0),N0.index=j,N0}class t2 extends B1.q{constructor(d2){super(d2),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(d2,"$fastController",{value:this,enumerable:!1})}subscribe(d2){this.flush(),super.subscribe(d2)}addSplice(d2){void 0===this.splices?this.splices=[d2]:this.splices.push(d2),this.needsQueue&&(this.needsQueue=!1,f1.SO.queueUpdate(this))}reset(d2){this.oldCollection=d2,this.needsQueue&&(this.needsQueue=!1,f1.SO.queueUpdate(this))}flush(){const d2=this.splices,j=this.oldCollection;if(void 0===d2&&void 0===j)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const E0=void 0===j?function k1(N0,d2){let j=[];const E0=function X0(N0){const d2=[];for(let j=0,E0=N0.length;j<E0;j++){const O1=N0[j];t0(d2,O1.index,O1.removed,O1.addedCount)}return d2}(d2);for(let O1=0,p3=E0.length;O1<p3;++O1){const Fe=E0[O1];1!==Fe.addedCount||1!==Fe.removed.length?j=j.concat(T1(N0,Fe.index,Fe.index+Fe.addedCount,Fe.removed,0,Fe.removed.length)):Fe.removed[0]!==N0[Fe.index]&&j.push(Fe)}return j}(this.source,d2):T1(this.source,0,this.source.length,j,0,j.length);this.notify(E0)}}var X2=b(9161),B3=b(8808);function A0(N0,d2,j,E0){N0.bind(d2[j],E0)}function O0(N0,d2,j,E0){const O1=Object.create(E0);O1.index=j,O1.length=d2.length,N0.bind(d2[j],O1)}Object.freeze({positioning:!1,recycle:!0});class I0{constructor(d2,j,E0,O1,p3,Fe){this.location=d2,this.itemsBinding=j,this.templateBinding=O1,this.options=Fe,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=A0,this.itemsBindingObserver=B0.y$.binding(j,this,E0),this.templateBindingObserver=B0.y$.binding(O1,this,p3),Fe.positioning&&(this.bindView=O0)}bind(d2,j){this.source=d2,this.originalContext=j,this.childContext=Object.create(j),this.childContext.parent=d2,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(d2,this.originalContext),this.template=this.templateBindingObserver.observe(d2,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(d2,j){d2===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):d2===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(j)}observeItems(d2=!1){if(!this.items)return void(this.items=S1.ow);const j=this.itemsObserver,E0=this.itemsObserver=B0.y$.getNotifier(this.items),O1=j!==E0;O1&&null!==j&&j.unsubscribe(this),(O1||d2)&&E0.subscribe(this)}updateViews(d2){const j=this.childContext,E0=this.views,O1=this.bindView,p3=this.items,Fe=this.template,r4=this.options.recycle,Ie=[];let et=0,Gt=0;for(let V4=0,on=d2.length;V4<on;++V4){const xo=d2[V4];let wv=0,ei=xo.index;const da=ei+xo.addedCount,I6=E0.splice(xo.index,xo.removed.length),lm=Gt=Ie.length+I6.length;for(;ei<da;++ei){const sm=E0[ei],wy=sm?sm.firstChild:this.location;let Sh;r4&&Gt>0?(wv<=lm&&I6.length>0?(Sh=I6[wv],wv++):(Sh=Ie[et],et++),Gt--):Sh=Fe.create(),E0.splice(ei,0,Sh),O1(Sh,p3,ei,j),Sh.insertBefore(wy)}I6[wv]&&Ie.push(...I6.slice(wv))}for(let V4=et,on=Ie.length;V4<on;++V4)Ie[V4].dispose();if(this.options.positioning)for(let V4=0,on=E0.length;V4<on;++V4){const xo=E0[V4].context;xo.length=on,xo.index=V4}}refreshAllViews(d2=!1){const j=this.items,E0=this.childContext,O1=this.template,p3=this.location,Fe=this.bindView;let r4=j.length,Ie=this.views,et=Ie.length;if((0===r4||d2||!this.options.recycle)&&(B3.b.disposeContiguousBatch(Ie),et=0),0===et){this.views=Ie=new Array(r4);for(let Gt=0;Gt<r4;++Gt){const V4=O1.create();Fe(V4,j,Gt,E0),Ie[Gt]=V4,V4.insertBefore(p3)}}else{let Gt=0;for(;Gt<r4;++Gt)if(Gt<et)Fe(Ie[Gt],j,Gt,E0);else{const on=O1.create();Fe(on,j,Gt,E0),Ie.push(on),on.insertBefore(p3)}const V4=Ie.splice(Gt,et-Gt);for(Gt=0,r4=V4.length;Gt<r4;++Gt)V4[Gt].dispose()}}unbindAllViews(){const d2=this.views;for(let j=0,E0=d2.length;j<E0;++j)d2[j].unbind()}}class s0 extends X2.m0{constructor(d2,j,E0){super(),this.itemsBinding=d2,this.templateBinding=j,this.options=E0,this.createPlaceholder=f1.SO.createBlockPlaceholder,function d3(){if(F1)return;F1=!0,B0.y$.setArrayObserverFactory(Ie=>new t2(Ie));const N0=Array.prototype;if(N0.$fastPatch)return;Reflect.defineProperty(N0,"$fastPatch",{value:1,enumerable:!1});const d2=N0.pop,j=N0.push,E0=N0.reverse,O1=N0.shift,p3=N0.sort,Fe=N0.splice,r4=N0.unshift;N0.pop=function(){const Ie=this.length>0,et=d2.apply(this,arguments),Gt=this.$fastController;return void 0!==Gt&&Ie&&Gt.addSplice(q1(this.length,[et],0)),et},N0.push=function(){const Ie=j.apply(this,arguments),et=this.$fastController;return void 0!==et&&et.addSplice(n2(q1(this.length-arguments.length,[],arguments.length),this)),Ie},N0.reverse=function(){let Ie;const et=this.$fastController;void 0!==et&&(et.flush(),Ie=this.slice());const Gt=E0.apply(this,arguments);return void 0!==et&&et.reset(Ie),Gt},N0.shift=function(){const Ie=this.length>0,et=O1.apply(this,arguments),Gt=this.$fastController;return void 0!==Gt&&Ie&&Gt.addSplice(q1(0,[et],0)),et},N0.sort=function(){let Ie;const et=this.$fastController;void 0!==et&&(et.flush(),Ie=this.slice());const Gt=p3.apply(this,arguments);return void 0!==et&&et.reset(Ie),Gt},N0.splice=function(){const Ie=Fe.apply(this,arguments),et=this.$fastController;return void 0!==et&&et.addSplice(n2(q1(+arguments[0],Ie,arguments.length>2?arguments.length-2:0),this)),Ie},N0.unshift=function(){const Ie=r4.apply(this,arguments),et=this.$fastController;return void 0!==et&&et.addSplice(n2(q1(0,[],arguments.length),this)),Ie}}(),this.isItemsBindingVolatile=B0.y$.isVolatileBinding(d2),this.isTemplateBindingVolatile=B0.y$.isVolatileBinding(j)}createBehavior(d2){return new I0(d2,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const S0="focusin",$1="focusout",kt="keydown";let F7=(()=>{class N0 extends Q.I{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(j,E0,O1)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const p3=Math.max(0,Math.min(this.rowElements.length-1,j)),r4=this.rowElements[p3].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),et=r4[Math.max(0,Math.min(r4.length-1,E0))];O1&&this.scrollHeight!==this.clientHeight&&(p3<this.focusRowIndex&&this.scrollTop>0||p3>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&et.scrollIntoView({block:"center",inline:"center"}),et.focus()},this.onChildListChange=(j,E0)=>{j&&j.length&&(j.forEach(O1=>{O1.addedNodes.forEach(p3=>{1===p3.nodeType&&"row"===p3.getAttribute("role")&&(p3.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,f1.SO.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let j=this.gridTemplateColumns;void 0===j&&(""===this.generatedGridTemplateColumns&&this.rowElements.length>0&&(this.generatedGridTemplateColumns=new Array(this.rowElements[0].cellElements.length).fill("1fr").join(" ")),j=this.generatedGridTemplateColumns),this.rowElements.forEach((E0,O1)=>{const p3=E0;p3.rowIndex=O1,p3.gridTemplateColumns=j,this.columnDefinitionsStale&&(p3.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(j){let E0="";return j.forEach(O1=>{E0=`${E0}${""===E0?"":" "}1fr`}),E0}noTabbingChanged(){this.$fastController.isConnected&&this.setAttribute("tabIndex",this.noTabbing||this.contains(document.activeElement)||this===document.activeElement?"-1":"0")}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=N0.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=N0.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new s0(j=>j.rowsData,j=>j.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener("focus",this.handleFocus),this.addEventListener(kt,this.handleKeydown),this.addEventListener($1,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),f1.SO.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener("focus",this.handleFocus),this.removeEventListener(kt,this.handleKeydown),this.removeEventListener($1,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(j){this.isUpdatingFocus=!0;const E0=j.target;this.focusRowIndex=this.rowElements.indexOf(E0),this.focusColumnIndex=E0.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(j){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(j){(null===j.relatedTarget||!this.contains(j.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(j){if(j.defaultPrevented)return;let E0;const O1=this.rowElements.length-1,p3=this.offsetHeight+this.scrollTop,Fe=this.rowElements[O1];switch(j.key){case p1.SB:j.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case p1.iF:j.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case p1.Op:if(j.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(E0=this.focusRowIndex-1;E0>=0;E0--){const r4=this.rowElements[E0];if(r4.offsetTop<this.scrollTop){this.scrollTop=r4.offsetTop+r4.clientHeight-this.clientHeight;break}}this.focusOnCell(E0,this.focusColumnIndex,!1);break;case p1.hi:if(j.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=O1||Fe.offsetTop+Fe.offsetHeight<=p3)return void this.focusOnCell(O1,this.focusColumnIndex,!1);for(E0=this.focusRowIndex+1;E0<=O1;E0++){const r4=this.rowElements[E0];if(r4.offsetTop+r4.offsetHeight>p3){let Ie=0;"sticky"===this.generateHeader&&null!==this.generatedHeader&&(Ie=this.generatedHeader.clientHeight),this.scrollTop=r4.offsetTop-Ie;break}}this.focusOnCell(E0,this.focusColumnIndex,!1);break;case p1.tU:j.ctrlKey&&(j.preventDefault(),this.focusOnCell(0,0,!0));break;case p1.Kh:j.ctrlKey&&null!==this.columnDefinitions&&(j.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,f1.SO.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const j=document.createElement(this.rowElementTag);return this.generatedHeader=j,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType="sticky"===this.generateHeader?"sticky-header":"header",void((null!==this.firstChild||null!==this.rowsPlaceholder)&&this.insertBefore(j,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}return N0.generateColumns=d2=>Object.getOwnPropertyNames(d2).map((j,E0)=>({columnDataKey:j,gridColumn:`${E0}`})),(0,y.gn)([(0,e0.Lj)({attribute:"no-tabbing",mode:"boolean"})],N0.prototype,"noTabbing",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"generate-header"})],N0.prototype,"generateHeader",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"grid-template-columns"})],N0.prototype,"gridTemplateColumns",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowsData",void 0),(0,y.gn)([B0.LO],N0.prototype,"columnDefinitions",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"cellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"headerCellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"focusRowIndex",void 0),(0,y.gn)([B0.LO],N0.prototype,"focusColumnIndex",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultRowItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowElementTag",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowElements",void 0),N0})();var io=b(3869);class $l extends io.x{constructor(d2,j){super(d2,j),this.observer=null,j.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return Array.from("subtree"in this.options?this.target.querySelectorAll(this.options.selector):this.target.childNodes)}}function Tr(N0){return"string"==typeof N0&&(N0={property:N0}),new X2.ON("fast-children",$l,N0)}let Or=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.rowType="default",this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new s0(j=>j.columnDefinitions,j=>j.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener($1,this.handleFocusout),this.addEventListener(kt,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener($1,this.handleFocusout),this.removeEventListener(kt,this.handleKeydown)}handleFocusout(j){this.contains(j.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(j){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(j.target),this.$emit("row-focused",this)}handleKeydown(j){if(j.defaultPrevented)return;let E0=0;switch(j.key){case p1.BE:E0=Math.max(0,this.focusColumnIndex-1),this.cellElements[E0].focus(),j.preventDefault();break;case p1.mr:E0=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[E0].focus(),j.preventDefault();break;case p1.tU:j.ctrlKey||(this.cellElements[0].focus(),j.preventDefault());break;case p1.Kh:j.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),j.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate="default"===this.rowType&&void 0!==this.cellItemTemplate?this.cellItemTemplate:"default"===this.rowType&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}return(0,y.gn)([(0,e0.Lj)({attribute:"grid-template-columns"})],N0.prototype,"gridTemplateColumns",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"row-type"})],N0.prototype,"rowType",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowData",void 0),(0,y.gn)([B0.LO],N0.prototype,"columnDefinitions",void 0),(0,y.gn)([B0.LO],N0.prototype,"cellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"headerCellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowIndex",void 0),(0,y.gn)([B0.LO],N0.prototype,"isActiveRow",void 0),(0,y.gn)([B0.LO],N0.prototype,"activeCellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultCellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultHeaderCellItemTemplate",void 0),(0,y.gn)([B0.LO],N0.prototype,"cellElements",void 0),N0})();const Ul=c0.d`
    <template>
        ${N0=>null===N0.rowData||null===N0.columnDefinition||null===N0.columnDefinition.columnDataKey?null:N0.rowData[N0.columnDefinition.columnDataKey]}
    </template>
`,oo=c0.d`
    <template>
        ${N0=>null===N0.columnDefinition?null:void 0===N0.columnDefinition.title?N0.columnDefinition.columnDataKey:N0.columnDefinition.title}
    </template>
`;let f0=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.cellType="default",this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(j,E0){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var j;super.connectedCallback(),this.addEventListener(S0,this.handleFocusin),this.addEventListener($1,this.handleFocusout),this.addEventListener(kt,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(j=this.columnDefinition)||void 0===j?void 0:j.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(S0,this.handleFocusin),this.removeEventListener($1,this.handleFocusout),this.removeEventListener(kt,this.handleKeydown),this.disconnectCellView()}handleFocusin(j){if(!this.isActiveCell){if(this.isActiveCell=!0,"columnheader"===this.cellType){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const E0=this.columnDefinition.headerCellFocusTargetCallback(this);null!==E0&&E0.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const E0=this.columnDefinition.cellFocusTargetCallback(this);null!==E0&&E0.focus()}this.$emit("cell-focused",this)}}handleFocusout(j){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(j){if(!(j.defaultPrevented||null===this.columnDefinition||"default"===this.cellType&&!0!==this.columnDefinition.cellInternalFocusQueue||"columnheader"===this.cellType&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(j.key){case p1.kL:case p1.ny:if(this.contains(document.activeElement)&&document.activeElement!==this)return;if("columnheader"===this.cellType){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const E0=this.columnDefinition.headerCellFocusTargetCallback(this);null!==E0&&E0.focus(),j.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const E0=this.columnDefinition.cellFocusTargetCallback(this);null!==E0&&E0.focus(),j.preventDefault()}break;case p1.CX:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),j.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case"columnheader":this.customCellView=void 0!==this.columnDefinition.headerCellTemplate?this.columnDefinition.headerCellTemplate.render(this,this):oo.render(this,this);break;case void 0:case"rowheader":case"default":this.customCellView=void 0!==this.columnDefinition.cellTemplate?this.columnDefinition.cellTemplate.render(this,this):Ul.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}return(0,y.gn)([(0,e0.Lj)({attribute:"cell-type"})],N0.prototype,"cellType",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"grid-column"})],N0.prototype,"gridColumn",void 0),(0,y.gn)([B0.LO],N0.prototype,"rowData",void 0),(0,y.gn)([B0.LO],N0.prototype,"columnDefinition",void 0),N0})();const n0=class I extends F7{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:F7,template:(N0,d2)=>{const j=function E9(N0){const d2=N0.tagFor(Or);return c0.d`
    <${d2}
        :rowData="${j=>j}"
        :cellItemTemplate="${(j,E0)=>E0.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(j,E0)=>E0.parent.headerCellItemTemplate}"
    ></${d2}>
`}(N0),E0=N0.tagFor(Or);return c0.d`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>E0}"
            :defaultRowItemTemplate="${j}"
            ${Tr({property:"rowElements",filter:(0,io.R)("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(N0,d2)=>L0.i`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`}),a1=class V0 extends Or{}.compose({baseName:"data-grid-row",baseClass:Or,template:(N0,d2)=>{const j=function C0(N0){const d2=N0.tagFor(f0);return c0.d`
    <${d2}
        cell-type="${j=>j.isRowHeader?"rowheader":void 0}"
        grid-column="${(j,E0)=>E0.index+1}"
        :rowData="${(j,E0)=>E0.parent.rowData}"
        :columnDefinition="${j=>j}"
    ></${d2}>
`}(N0),E0=function J(N0){const d2=N0.tagFor(f0);return c0.d`
    <${d2}
        cell-type="columnheader"
        grid-column="${(j,E0)=>E0.index+1}"
        :columnDefinition="${j=>j}"
    ></${d2}>
`}(N0);return c0.d`
        <template
            role="row"
            class="${O1=>"default"!==O1.rowType?O1.rowType:""}"
            :defaultCellItemTemplate="${j}"
            :defaultHeaderCellItemTemplate="${E0}"
            ${Tr({property:"cellElements",filter:(0,io.R)('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${(0,c1.Q)("slottedCellElements")}></slot>
        </template>
    `},styles:(N0,d2)=>L0.i`
	:host {
		display: grid;
		padding: calc((${U._5} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${U.Oq};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${U.mV};
		outline: 1px dotted ${U.M2};
		outline-offset: -1px;
	}
`}),c2=class r2 extends f0{}.compose({baseName:"data-grid-cell",baseClass:f0,template:(N0,d2)=>c0.d`
        <template
            tabindex="-1"
            role="${j=>j.cellType&&"default"!==j.cellType?j.cellType:"gridcell"}"
            class="
            ${j=>"columnheader"===j.cellType?"column-header":"rowheader"===j.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(N0,d2)=>L0.i`
	:host {
		padding: calc(${U._5} * 1px) calc(${U._5} * 3px);
		color: ${U.dR};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${U.I8};
		font-size: ${U.cS};
		line-height: ${U.RU};
		font-weight: 400;
		border: solid calc(${U.J4} * 1px) transparent;
		border-radius: calc(${U.Ri} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${r1.b}),
	:host(:focus),
	:host(:active) {
		background: ${U.dC};
		border: solid calc(${U.J4} * 1px) ${U.R8};
		color: ${U.M6};
		outline: none;
	}
	:host(:${r1.b}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${U.M6} !important;
	}
`});let Pe=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.role="separator",this.orientation="horizontal"}}return(0,y.gn)([e0.Lj],N0.prototype,"role",void 0),(0,y.gn)([e0.Lj],N0.prototype,"orientation",void 0),N0})();const $4=class O4 extends Pe{}.compose({baseName:"divider",template:(N0,d2)=>c0.d`
    <template role="${j=>j.role}" aria-orientation="${j=>j.orientation}"></template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("block")} :host {
		border: none;
		border-top: calc(${U.J4} * 1px) solid ${U.IM};
		box-sizing: content-box;
		height: 0;
		margin: calc(${U._5} * 1px) 0;
		width: 100%;
	}
`});let U4=0;function x(N0=""){return`${N0}${U4++}`}var K2=b(1108),H3=b(3290),ee=b(6322),n4=b(2119);function Re(N0){return(0,K2.Re)(N0)&&("option"===N0.getAttribute("role")||N0 instanceof HTMLOptionElement)}let P4=(()=>{class N0 extends Q.I{constructor(j,E0,O1,p3){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,j&&(this.textContent=j),E0&&(this.initialValue=E0),O1&&(this.defaultSelected=O1),p3&&(this.selected=p3),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(j,E0){this.ariaChecked="boolean"!=typeof E0?null:E0?"true":"false"}contentChanged(j,E0){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(j,E0){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(j,E0){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var j;return null!==(j=this.value)&&void 0!==j?j:this.text}get text(){var j,E0;return null!==(E0=null===(j=this.textContent)||void 0===j?void 0:j.replace(/\s+/g," ").trim())&&void 0!==E0?E0:""}set value(j){const E0=`${j??""}`;this._value=E0,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=E0),B0.y$.notify(this,"value")}get value(){var j;return B0.y$.track(this,"value"),null!==(j=this._value)&&void 0!==j?j:this.text}get form(){return this.proxy?this.proxy.form:null}}return(0,y.gn)([B0.LO],N0.prototype,"checked",void 0),(0,y.gn)([B0.LO],N0.prototype,"content",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultSelected",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"disabled",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"selected",mode:"boolean"})],N0.prototype,"selectedAttribute",void 0),(0,y.gn)([B0.LO],N0.prototype,"selected",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"value",mode:"fromView"})],N0.prototype,"initialValue",void 0),N0})(),L4=(()=>{class N0{}return(0,y.gn)([B0.LO],N0.prototype,"ariaChecked",void 0),(0,y.gn)([B0.LO],N0.prototype,"ariaPosInSet",void 0),(0,y.gn)([B0.LO],N0.prototype,"ariaSelected",void 0),(0,y.gn)([B0.LO],N0.prototype,"ariaSetSize",void 0),N0})();(0,n4.e)(L4,H3.v),(0,n4.e)(P4,ee.hW,L4);let d5=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var j;return null!==(j=this.selectedOptions[0])&&void 0!==j?j:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(j=>j.disabled)}get length(){var j,E0;return null!==(E0=null===(j=this.options)||void 0===j?void 0:j.length)&&void 0!==E0?E0:0}get options(){return B0.y$.track(this,"options"),this._options}set options(j){this._options=j,B0.y$.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(j){this.typeaheadExpired=j}clickHandler(j){const E0=j.target.closest("option,[role=option]");if(E0&&!E0.disabled)return this.selectedIndex=this.options.indexOf(E0),!0}focusAndScrollOptionIntoView(j=this.firstSelectedOption){this.contains(document.activeElement)&&null!==j&&(j.focus(),requestAnimationFrame(()=>{j.scrollIntoView({block:"nearest"})}))}focusinHandler(j){!this.shouldSkipFocus&&j.target===j.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const j=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),E0=new RegExp(`^${j}`,"gi");return this.options.filter(O1=>O1.text.trim().match(E0))}getSelectableIndex(j=this.selectedIndex,E0){const O1=j>E0?-1:j<E0?1:0,p3=j+O1;let Fe=null;switch(O1){case-1:Fe=this.options.reduceRight((r4,Ie,et)=>!r4&&!Ie.disabled&&et<p3?Ie:r4,Fe);break;case 1:Fe=this.options.reduce((r4,Ie,et)=>!r4&&!Ie.disabled&&et>p3?Ie:r4,Fe)}return this.options.indexOf(Fe)}handleChange(j,E0){"selected"===E0&&(N0.slottedOptionFilter(j)&&(this.selectedIndex=this.options.indexOf(j)),this.setSelectedOptions())}handleTypeAhead(j){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,N0.TYPE_AHEAD_TIMEOUT_MS),!(j.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${j}`)}keydownHandler(j){if(this.disabled)return!0;this.shouldSkipFocus=!1;const E0=j.key;switch(E0){case p1.tU:j.shiftKey||(j.preventDefault(),this.selectFirstOption());break;case p1.iF:j.shiftKey||(j.preventDefault(),this.selectNextOption());break;case p1.SB:j.shiftKey||(j.preventDefault(),this.selectPreviousOption());break;case p1.Kh:j.preventDefault(),this.selectLastOption();break;case p1.oM:return this.focusAndScrollOptionIntoView(),!0;case p1.kL:case p1.CX:return!0;case p1.BI:if(this.typeaheadExpired)return!0;default:return 1===E0.length&&this.handleTypeAhead(`${E0}`),!0}}mousedownHandler(j){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(j,E0){this.ariaMultiSelectable=E0?"true":null}selectedIndexChanged(j,E0){var O1;if(this.hasSelectableOptions){if(null!==(O1=this.options[this.selectedIndex])&&void 0!==O1&&O1.disabled&&"number"==typeof j){const p3=this.getSelectableIndex(j,E0),Fe=p3>-1?p3:j;return this.selectedIndex=Fe,void(E0===Fe&&this.selectedIndexChanged(E0,Fe))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(j,E0){var O1;const p3=E0.filter(N0.slottedOptionFilter);null===(O1=this.options)||void 0===O1||O1.forEach(Fe=>{const r4=B0.y$.getNotifier(Fe);r4.unsubscribe(this,"selected"),Fe.selected=p3.includes(Fe),r4.subscribe(this,"selected")})}selectFirstOption(){var j,E0;this.disabled||(this.selectedIndex=null!==(E0=null===(j=this.options)||void 0===j?void 0:j.findIndex(O1=>!O1.disabled))&&void 0!==E0?E0:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function l2(N0,d2){let j=N0.length;for(;j--;)if(d2(N0[j],j,N0))return j;return-1}(this.options,j=>!j.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var j,E0;this.selectedIndex=null!==(E0=null===(j=this.options)||void 0===j?void 0:j.findIndex(O1=>O1.defaultSelected))&&void 0!==E0?E0:-1}setSelectedOptions(){var j,E0,O1;null!==(j=this.options)&&void 0!==j&&j.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(O1=null===(E0=this.firstSelectedOption)||void 0===E0?void 0:E0.id)&&void 0!==O1?O1:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(j,E0){this.options=E0.reduce((p3,Fe)=>(Re(Fe)&&p3.push(Fe),p3),[]);const O1=`${this.options.length}`;this.options.forEach((p3,Fe)=>{p3.id||(p3.id=x("option-")),p3.ariaPosInSet=`${Fe+1}`,p3.ariaSetSize=O1}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(j,E0){if(this.$fastController.isConnected){const O1=this.getTypeaheadMatches();if(O1.length){const p3=this.options.indexOf(O1[0]);p3>-1&&(this.selectedIndex=p3)}this.typeaheadExpired=!1}}}return N0.slottedOptionFilter=d2=>Re(d2)&&!d2.hidden,N0.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"disabled",void 0),(0,y.gn)([B0.LO],N0.prototype,"selectedIndex",void 0),(0,y.gn)([B0.LO],N0.prototype,"selectedOptions",void 0),(0,y.gn)([B0.LO],N0.prototype,"slottedOptions",void 0),(0,y.gn)([B0.LO],N0.prototype,"typeaheadBuffer",void 0),N0})(),nn=(()=>{class N0{}return(0,y.gn)([B0.LO],N0.prototype,"ariaActiveDescendant",void 0),(0,y.gn)([B0.LO],N0.prototype,"ariaDisabled",void 0),(0,y.gn)([B0.LO],N0.prototype,"ariaExpanded",void 0),(0,y.gn)([B0.LO],N0.prototype,"ariaMultiSelectable",void 0),N0})();function Ye(N0,d2,j=0){return[d2,j]=[d2,j].sort((E0,O1)=>E0-O1),d2<=N0&&N0<j}(0,n4.e)(nn,H3.v),(0,n4.e)(d5,nn);let V5=(()=>{class N0 extends d5{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var j;return null===(j=this.options)||void 0===j?void 0:j.filter(E0=>E0.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(j,E0){var O1,p3;this.ariaActiveDescendant=null!==(p3=null===(O1=this.options[E0])||void 0===O1?void 0:O1.id)&&void 0!==p3?p3:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const j=this.activeOption;j&&(j.checked=!0)}checkFirstOption(j=!1){j?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((E0,O1)=>{E0.checked=Ye(O1,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(j=!1){j?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((E0,O1)=>{E0.checked=Ye(O1,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(j=!1){j?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((E0,O1)=>{E0.checked=Ye(O1,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(j=!1){j?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((E0,O1)=>{E0.checked=Ye(O1,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(j){var E0;if(!this.multiple)return super.clickHandler(j);const O1=null===(E0=j.target)||void 0===E0?void 0:E0.closest("[role=option]");return O1&&!O1.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(O1),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(j){if(!this.multiple)return super.focusinHandler(j);!this.shouldSkipFocus&&j.target===j.currentTarget&&(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(j){this.multiple&&this.uncheckAllOptions()}keydownHandler(j){if(!this.multiple)return super.keydownHandler(j);if(this.disabled)return!0;const{key:E0,shiftKey:O1}=j;switch(this.shouldSkipFocus=!1,E0){case p1.tU:return void this.checkFirstOption(O1);case p1.iF:return void this.checkNextOption(O1);case p1.SB:return void this.checkPreviousOption(O1);case p1.Kh:return void this.checkLastOption(O1);case p1.oM:return this.focusAndScrollOptionIntoView(),!0;case p1.CX:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case p1.BI:if(j.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===E0.length&&this.handleTypeAhead(`${E0}`),!0}}mousedownHandler(j){if(j.offsetX>=0&&j.offsetX<=this.scrollWidth)return super.mousedownHandler(j)}multipleChanged(j,E0){var O1;this.ariaMultiSelectable=E0?"true":null,null===(O1=this.options)||void 0===O1||O1.forEach(p3=>{p3.checked=!E0&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(j=>j.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(j,E0){var O1;const p3=Math.max(0,parseInt(null!==(O1=E0?.toFixed())&&void 0!==O1?O1:"",10));p3!==E0&&f1.SO.queueUpdate(()=>{this.size=p3})}toggleSelectedForAllCheckedOptions(){const j=this.checkedOptions.filter(O1=>!O1.disabled),E0=!j.every(O1=>O1.selected);j.forEach(O1=>O1.selected=E0),this.selectedIndex=this.options.indexOf(j[j.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(j,E0){if(this.multiple){if(this.$fastController.isConnected){const O1=this.getTypeaheadMatches(),p3=this.options.indexOf(O1[0]);p3>-1&&(this.activeIndex=p3,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(j,E0)}uncheckAllOptions(j=!1){this.options.forEach(E0=>E0.checked=!this.multiple&&void 0),j||(this.rangeStartIndex=-1)}}return(0,y.gn)([B0.LO],N0.prototype,"activeIndex",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"multiple",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"size",void 0),N0})();class N7 extends V5{}class Mo extends((0,Z1.Um)(N7)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let k8=(()=>{class N0 extends Mo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=x("listbox-"),this.maxHeight=0}openChanged(j,E0){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void f1.SO.queueUpdate(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return B0.y$.track(this,"value"),this._value}set value(j){var E0,O1,p3,Fe,r4,Ie,et;const Gt=`${this._value}`;if(null!==(E0=this._options)&&void 0!==E0&&E0.length){const V4=this._options.findIndex(D9=>D9.value===j),on=null!==(p3=null===(O1=this._options[this.selectedIndex])||void 0===O1?void 0:O1.value)&&void 0!==p3?p3:null,xo=null!==(r4=null===(Fe=this._options[V4])||void 0===Fe?void 0:Fe.value)&&void 0!==r4?r4:null;(-1===V4||on!==xo)&&(j="",this.selectedIndex=V4),j=null!==(et=null===(Ie=this.firstSelectedOption)||void 0===Ie?void 0:Ie.value)&&void 0!==et?et:j}Gt!==j&&(this._value=j,super.valueChanged(Gt,j),B0.y$.notify(this,"value"),this.updateDisplayValue())}updateValue(j){var E0,O1;this.$fastController.isConnected&&(this.value=null!==(O1=null===(E0=this.firstSelectedOption)||void 0===E0?void 0:E0.value)&&void 0!==O1?O1:""),j&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(j,E0){super.selectedIndexChanged(j,E0),this.updateValue()}positionChanged(j,E0){this.positionAttribute=E0,this.setPositioning()}setPositioning(){const j=this.getBoundingClientRect(),O1=window.innerHeight-j.bottom;this.position=this.forcedPosition?this.positionAttribute:j.top>O1?"above":"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight="above"===this.position?~~j.top:~~O1}get displayValue(){var j,E0;return B0.y$.track(this,"displayValue"),null!==(E0=null===(j=this.firstSelectedOption)||void 0===j?void 0:j.text)&&void 0!==E0?E0:""}disabledChanged(j,E0){super.disabledChanged&&super.disabledChanged(j,E0),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(j){if(!this.disabled){if(this.open){const E0=j.target.closest("option,[role=option]");if(E0&&E0.disabled)return}return super.clickHandler(j),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(j){var E0;if(super.focusoutHandler(j),!this.open)return!0;const O1=j.relatedTarget;this.isSameNode(O1)?this.focus():null!==(E0=this.options)&&void 0!==E0&&E0.includes(O1)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(j,E0){super.handleChange(j,E0),"value"===E0&&this.updateValue()}slottedOptionsChanged(j,E0){this.options.forEach(O1=>{B0.y$.getNotifier(O1).unsubscribe(this,"value")}),super.slottedOptionsChanged(j,E0),this.options.forEach(O1=>{B0.y$.getNotifier(O1).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(j){var E0;return j.offsetX>=0&&j.offsetX<=(null===(E0=this.listbox)||void 0===E0?void 0:E0.scrollWidth)?super.mousedownHandler(j):this.collapsible}multipleChanged(j,E0){super.multipleChanged(j,E0),this.proxy&&(this.proxy.multiple=E0)}selectedOptionsChanged(j,E0){var O1;super.selectedOptionsChanged(j,E0),null===(O1=this.options)||void 0===O1||O1.forEach((p3,Fe)=>{var r4;const Ie=null===(r4=this.proxy)||void 0===r4?void 0:r4.options.item(Fe);Ie&&(Ie.selected=p3.selected)})}setDefaultSelectedOption(){var j;const E0=null!==(j=this.options)&&void 0!==j?j:Array.from(this.children).filter(d5.slottedOptionFilter),O1=E0?.findIndex(p3=>p3.hasAttribute("selected")||p3.selected||p3.value===this.value);this.selectedIndex=-1===O1?0:O1}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(j=>{const E0=j.proxy||(j instanceof HTMLOptionElement?j.cloneNode():null);E0&&this.proxy.options.add(E0)}))}keydownHandler(j){super.keydownHandler(j);const E0=j.key||j.key.charCodeAt(0);switch(E0){case p1.BI:j.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case p1.tU:case p1.Kh:j.preventDefault();break;case p1.kL:j.preventDefault(),this.open=!this.open;break;case p1.CX:this.collapsible&&this.open&&(j.preventDefault(),this.open=!1);break;case p1.oM:return this.collapsible&&this.open&&(j.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(E0===p1.iF||E0===p1.SB)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(j,E0){super.sizeChanged(j,E0),this.proxy&&(this.proxy.size=E0)}updateDisplayValue(){this.collapsible&&B0.y$.notify(this,"displayValue")}}return(0,y.gn)([(0,e0.Lj)({attribute:"open",mode:"boolean"})],N0.prototype,"open",void 0),(0,y.gn)([B0.lk],N0.prototype,"collapsible",null),(0,y.gn)([B0.LO],N0.prototype,"control",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"position"})],N0.prototype,"positionAttribute",void 0),(0,y.gn)([B0.LO],N0.prototype,"position",void 0),(0,y.gn)([B0.LO],N0.prototype,"maxHeight",void 0),N0})(),P=(()=>{class N0{}return(0,y.gn)([B0.LO],N0.prototype,"ariaControls",void 0),N0})();(0,n4.e)(P,nn),(0,n4.e)(k8,ee.hW,P);const Z0=N0=>"function"==typeof N0,o0=()=>null;function y0(N0){return void 0===N0?o0:Z0(N0)?N0:()=>N0}function V1(N0,d2,j){const E0=Z0(N0)?N0:()=>N0,O1=y0(d2),p3=y0(j);return(Fe,r4)=>E0(Fe,r4)?O1(Fe,r4):p3(Fe,r4)}var e3=b(4121);const En=class $n extends k8{}.compose({baseName:"dropdown",template:(N0,d2)=>c0.d`
    <template
        class="${j=>[j.collapsible&&"collapsible",j.collapsible&&j.open&&"open",j.disabled&&"disabled",j.collapsible&&j.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${j=>j.ariaActiveDescendant}"
        aria-controls="${j=>j.ariaControls}"
        aria-disabled="${j=>j.ariaDisabled}"
        aria-expanded="${j=>j.ariaExpanded}"
        aria-haspopup="${j=>j.collapsible?"listbox":null}"
        aria-multiselectable="${j=>j.ariaMultiSelectable}"
        ?open="${j=>j.open}"
        role="combobox"
        tabindex="${j=>j.disabled?null:"0"}"
        @click="${(j,E0)=>j.clickHandler(E0.event)}"
        @focusin="${(j,E0)=>j.focusinHandler(E0.event)}"
        @focusout="${(j,E0)=>j.focusoutHandler(E0.event)}"
        @keydown="${(j,E0)=>j.keydownHandler(E0.event)}"
        @mousedown="${(j,E0)=>j.mousedownHandler(E0.event)}"
    >
        ${V1(j=>j.collapsible,c0.d`
                <div
                    class="control"
                    part="control"
                    ?disabled="${j=>j.disabled}"
                    ${(0,e3.i)("control")}
                >
                    ${(0,ee.m9)(N0,d2)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${j=>j.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${d2.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${(0,ee.LC)(N0,d2)}
                </div>
            `)}
        <div
            class="listbox"
            id="${j=>j.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${j=>j.disabled}"
            ?hidden="${j=>!!j.collapsible&&!j.open}"
            ${(0,e3.i)("listbox")}
        >
            <slot
                ${(0,c1.Q)({filter:d5.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-flex")} :host {
		background: ${U.zP};
		border-radius: calc(${U.Rm} * 1px);
		box-sizing: border-box;
		color: ${U.dR};
		contain: contents;
		font-family: ${U.I8};
		height: calc(${U.WC} * 1px);
		position: relative;
		user-select: none;
		min-width: ${U.Of};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${U.J4} * 1px) solid ${U.Bv};
		border-radius: calc(${U.Rm} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${U.cS};
		line-height: ${U.RU};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${U.zP};
		border: calc(${U.J4} * 1px) solid ${U.R8};
		border-radius: calc(${U.Rm} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${U.jm};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${r1.b}) .control {
		border-color: ${U.R8};
	}
	:host(:not([disabled]):hover) {
		background: ${U.zP};
		border-color: ${U.Bv};
	}
	:host(:${r1.b}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${U.dC};
		border: calc(${U.J4} * 1px) solid transparent;
		color: ${U.M6};
	}
	:host([disabled]) {
		cursor: ${M2.H};
		opacity: ${U.VF};
	}
	:host([disabled]) .control {
		cursor: ${M2.H};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${U.zP};
		color: ${U.dR};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${U.R8};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${U.R8};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${U.WC} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${U.WC} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${U._5} * 4px);
		min-width: calc(${U._5} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});let K5=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var j;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&null!==(j=this.$fastController.definition.shadowOptions)&&void 0!==j&&j.delegatesFocus&&(this.focus=()=>{var E0;null===(E0=this.control)||void 0===E0||E0.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}return(0,y.gn)([e0.Lj],N0.prototype,"download",void 0),(0,y.gn)([e0.Lj],N0.prototype,"href",void 0),(0,y.gn)([e0.Lj],N0.prototype,"hreflang",void 0),(0,y.gn)([e0.Lj],N0.prototype,"ping",void 0),(0,y.gn)([e0.Lj],N0.prototype,"referrerpolicy",void 0),(0,y.gn)([e0.Lj],N0.prototype,"rel",void 0),(0,y.gn)([e0.Lj],N0.prototype,"target",void 0),(0,y.gn)([e0.Lj],N0.prototype,"type",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultSlottedContent",void 0),N0})(),r5=(()=>{class N0{}return(0,y.gn)([(0,e0.Lj)({attribute:"aria-expanded"})],N0.prototype,"ariaExpanded",void 0),N0})();(0,n4.e)(r5,H3.v),(0,n4.e)(K5,ee.hW,r5);const Jo=class u7 extends K5{}.compose({baseName:"link",template:(N0,d2)=>c0.d`
    <a
        class="control"
        part="control"
        download="${j=>j.download}"
        href="${j=>j.href}"
        hreflang="${j=>j.hreflang}"
        ping="${j=>j.ping}"
        referrerpolicy="${j=>j.referrerpolicy}"
        rel="${j=>j.rel}"
        target="${j=>j.target}"
        type="${j=>j.type}"
        aria-atomic="${j=>j.ariaAtomic}"
        aria-busy="${j=>j.ariaBusy}"
        aria-controls="${j=>j.ariaControls}"
        aria-current="${j=>j.ariaCurrent}"
        aria-describedby="${j=>j.ariaDescribedby}"
        aria-details="${j=>j.ariaDetails}"
        aria-disabled="${j=>j.ariaDisabled}"
        aria-errormessage="${j=>j.ariaErrormessage}"
        aria-expanded="${j=>j.ariaExpanded}"
        aria-flowto="${j=>j.ariaFlowto}"
        aria-haspopup="${j=>j.ariaHaspopup}"
        aria-hidden="${j=>j.ariaHidden}"
        aria-invalid="${j=>j.ariaInvalid}"
        aria-keyshortcuts="${j=>j.ariaKeyshortcuts}"
        aria-label="${j=>j.ariaLabel}"
        aria-labelledby="${j=>j.ariaLabelledby}"
        aria-live="${j=>j.ariaLive}"
        aria-owns="${j=>j.ariaOwns}"
        aria-relevant="${j=>j.ariaRelevant}"
        aria-roledescription="${j=>j.ariaRoledescription}"
        ${(0,e3.i)("control")}
    >
        ${(0,ee.m9)(N0,d2)}
        <span class="content" part="content">
            <slot ${(0,c1.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,ee.LC)(N0,d2)}
    </a>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${U.jy};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${U.I8};
		font-size: ${U.cS};
		line-height: ${U.RU};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${U.J4} * 1px) solid transparent;
		border-radius: calc(${U.Ri} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${U.s2};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${U.s2};
	}
	:host(:${r1.b}) .control,
	:host(:focus) .control {
		border: calc(${U.J4} * 1px) solid ${U.R8};
	}
`,shadowOptions:{delegatesFocus:!0}}),Ir=class e8 extends P4{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.textContent?this.textContent:"Option")}}.compose({baseName:"option",template:(N0,d2)=>c0.d`
    <template
        aria-checked="${j=>j.ariaChecked}"
        aria-disabled="${j=>j.ariaDisabled}"
        aria-posinset="${j=>j.ariaPosInSet}"
        aria-selected="${j=>j.ariaSelected}"
        aria-setsize="${j=>j.ariaSetSize}"
        class="${j=>[j.checked&&"checked",j.selected&&"selected",j.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${(0,ee.m9)(N0,d2)}
        <span class="content" part="content">
            <slot ${(0,c1.Q)("content")}></slot>
        </span>
        ${(0,ee.LC)(N0,d2)}
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${U.Ri};
		border: calc(${U.J4} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${U.dR};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${U.cS};
		line-height: ${U.RU};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${U._5} / 2) * 1px)
			calc((${U._5} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${r1.b}) {
		border-color: ${U.R8};
		background: ${U.dC};
		color: ${U.dR};
	}
	:host([aria-selected='true']) {
		background: ${U.dC};
		border: calc(${U.J4} * 1px) solid transparent;
		color: ${U.M6};
	}
	:host(:active) {
		background: ${U.dC};
		color: ${U.M6};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${U.dC};
		border: calc(${U.J4} * 1px) solid transparent;
		color: ${U.M6};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${U.dC};
		color: ${U.dR};
	}
	:host([disabled]) {
		cursor: ${M2.H};
		opacity: ${U.VF};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`});let ul=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=j=>"true"===j.getAttribute("aria-disabled"),this.isHiddenElement=j=>j.hasAttribute("hidden"),this.isFocusableElement=j=>!this.isDisabledElement(j)&&!this.isHiddenElement(j),this.setTabs=()=>{const j="gridColumn",E0="gridRow",O1=this.isHorizontal()?j:E0;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((p3,Fe)=>{if("tab"===p3.slot){const r4=this.activeTabIndex===Fe&&this.isFocusableElement(p3);this.activeindicator&&this.isFocusableElement(p3)&&(this.showActiveIndicator=!0);const Ie=this.tabIds[Fe],et=this.tabpanelIds[Fe];p3.setAttribute("id",Ie),p3.setAttribute("aria-selected",r4?"true":"false"),p3.setAttribute("aria-controls",et),p3.addEventListener("click",this.handleTabClick),p3.addEventListener("keydown",this.handleTabKeyDown),p3.setAttribute("tabindex",r4?"0":"-1"),r4&&(this.activetab=p3,this.activeid=Ie)}p3.style[j]="",p3.style[E0]="",p3.style[O1]=`${Fe+1}`,this.isHorizontal()?p3.classList.remove("vertical"):p3.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((j,E0)=>{const O1=this.tabIds[E0];j.setAttribute("id",this.tabpanelIds[E0]),j.setAttribute("aria-labelledby",O1),this.activeTabIndex!==E0?j.setAttribute("hidden",""):j.removeAttribute("hidden")})},this.handleTabClick=j=>{const E0=j.currentTarget;1===E0.nodeType&&this.isFocusableElement(E0)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(E0),this.setComponent())},this.handleTabKeyDown=j=>{if(this.isHorizontal())switch(j.key){case p1.BE:j.preventDefault(),this.adjustBackward(j);break;case p1.mr:j.preventDefault(),this.adjustForward(j)}else switch(j.key){case p1.SB:j.preventDefault(),this.adjustBackward(j);break;case p1.iF:j.preventDefault(),this.adjustForward(j)}switch(j.key){case p1.tU:j.preventDefault(),this.adjust(-this.activeTabIndex);break;case p1.Kh:j.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=j=>{const E0=this.tabs;let O1=0;for(O1=this.activetab?E0.indexOf(this.activetab)+1:1,O1===E0.length&&(O1=0);O1<E0.length&&E0.length>1;){if(this.isFocusableElement(E0[O1])){this.moveToTabByIndex(E0,O1);break}if(this.activetab&&O1===E0.indexOf(this.activetab))break;O1+1>=E0.length?O1=0:O1+=1}},this.adjustBackward=j=>{const E0=this.tabs;let O1=0;for(O1=this.activetab?E0.indexOf(this.activetab)-1:0,O1=O1<0?E0.length-1:O1;O1>=0&&E0.length>1;){if(this.isFocusableElement(E0[O1])){this.moveToTabByIndex(E0,O1);break}O1-1<0?O1=E0.length-1:O1-=1}},this.moveToTabByIndex=(j,E0)=>{const O1=j[E0];this.activetab=O1,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=E0,O1.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(j,E0){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(O1=>O1.id===j),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(j=>{var E0;return null!==(E0=j.getAttribute("id"))&&void 0!==E0?E0:`tab-${x()}`})}getTabPanelIds(){return this.tabpanels.map(j=>{var E0;return null!==(E0=j.getAttribute("id"))&&void 0!==E0?E0:`panel-${x()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const j=this.isHorizontal()?"gridColumn":"gridRow",E0=this.isHorizontal()?"translateX":"translateY",O1=this.isHorizontal()?"offsetLeft":"offsetTop",p3=this.activeIndicatorRef[O1];this.activeIndicatorRef.style[j]=`${this.activeTabIndex+1}`;const Fe=this.activeIndicatorRef[O1];this.activeIndicatorRef.style[j]=`${this.prevActiveTabIndex+1}`,this.activeIndicatorRef.style.transform=`${E0}(${Fe-p3}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[j]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${E0}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(j){const E0=this.tabs.filter(r4=>this.isFocusableElement(r4)),O1=E0.indexOf(this.activetab),p3=function j4(N0,d2,j){return Math.min(Math.max(j,N0),d2)}(0,E0.length-1,O1+j),Fe=this.tabs.indexOf(E0[p3]);Fe>-1&&this.moveToTabByIndex(this.tabs,Fe)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}return(0,y.gn)([e0.Lj],N0.prototype,"orientation",void 0),(0,y.gn)([e0.Lj],N0.prototype,"activeid",void 0),(0,y.gn)([B0.LO],N0.prototype,"tabs",void 0),(0,y.gn)([B0.LO],N0.prototype,"tabpanels",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"activeindicator",void 0),(0,y.gn)([B0.LO],N0.prototype,"activeIndicatorRef",void 0),(0,y.gn)([B0.LO],N0.prototype,"showActiveIndicator",void 0),N0})();(0,n4.e)(ul,ee.hW);let sv=(()=>{class N0 extends Q.I{}return(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"disabled",void 0),N0})();class av extends Q.I{}const em=class yo extends ul{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation="horizontal"),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(N0,d2)=>c0.d`
    <template class="${j=>j.orientation}">
        ${(0,ee.m9)(N0,d2)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,c1.Q)("tabs")}></slot>

            ${V1(j=>j.showActiveIndicator,c0.d`
                    <div
                        ${(0,e3.i)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${(0,ee.LC)(N0,d2)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${(0,c1.Q)("tabpanels")}></slot>
        </div>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("grid")} :host {
		box-sizing: border-box;
		font-family: ${U.I8};
		font-size: ${U.cS};
		line-height: ${U.RU};
		color: ${U.dR};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${U._5} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${U._5} * 1px) calc(${U._5} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${U._5} / 4) * 1px);
		justify-self: center;
		background: ${U.r1};
		margin: 0;
		border-radius: calc(${U.Ri} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`}),zs=class dv extends sv{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(N0,d2)=>c0.d`
    <template slot="tab" role="tab" aria-disabled="${j=>j.disabled}">
        <slot></slot>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${U.I8};
		font-size: ${U.cS};
		line-height: ${U.RU};
		height: calc(${U._5} * 7px);
		padding: calc(${U._5} * 1px) 0;
		color: ${U._9};
		fill: currentcolor;
		border-radius: calc(${U.Ri} * 1px);
		border: solid calc(${U.J4} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${U.r1};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${U.r1};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${U.r1};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${U.r1};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${U.r1};
		fill: currentcolor;
	}
	:host(:${r1.b}) {
		outline: none;
		border: solid calc(${U.J4} * 1px) ${U.K8};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${U._5} * 2px);
	}
`}),bg=class n8 extends av{}.compose({baseName:"panel-view",template:(N0,d2)=>c0.d`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${U.J4} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${U.cS};
		line-height: ${U.RU};
		padding: 10px calc((${U._5} + 2) * 1px);
	}
`});let Q_=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const j="number"==typeof this.min?this.min:0,p3=("number"==typeof this.max?this.max:100)-j;this.percentComplete=0===p3?0:Math.fround((("number"==typeof this.value?this.value:0)-j)/p3*100)}}return(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"value",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"min",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"max",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"paused",void 0),(0,y.gn)([B0.LO],N0.prototype,"percentComplete",void 0),N0})();const kg=class J_ extends Q_{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(d2,j,E0){"value"===d2&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(N0,d2)=>c0.d`
    <template
        role="progressbar"
        aria-valuenow="${j=>j.value}"
        aria-valuemin="${j=>j.min}"
        aria-valuemax="${j=>j.max}"
        class="${j=>j.paused?"paused":""}"
    >
        ${V1(j=>"number"==typeof j.value,c0.d`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${j=>44*j.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,c0.d`
                <slot name="indeterminate" slot="indeterminate">
                    ${d2.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${U._5} * 7px);
		width: calc(${U._5} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${U._5} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${U.Bq};
		stroke-width: calc(${U._5} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});var ha=function(N0){return N0.ltr="ltr",N0.rtl="rtl",N0}(ha||{});let ez=(()=>{class N0 extends Q.I{constructor(){super(...arguments),this.orientation="horizontal",this.radioChangeHandler=j=>{const E0=j.target;E0.checked&&(this.slottedRadioButtons.forEach(O1=>{O1!==E0&&(O1.checked=!1,this.isInsideFoundationToolbar||O1.setAttribute("tabindex","-1"))}),this.selectedRadio=E0,this.value=E0.value,E0.setAttribute("tabindex","0"),this.focusedRadio=E0),j.stopPropagation()},this.moveToRadioByIndex=(j,E0)=>{const O1=j[E0];this.isInsideToolbar||(O1.setAttribute("tabindex","0"),O1.readOnly?this.slottedRadioButtons.forEach(p3=>{p3!==O1&&p3.setAttribute("tabindex","-1")}):(O1.checked=!0,this.selectedRadio=O1)),this.focusedRadio=O1,O1.focus()},this.moveRightOffGroup=()=>{var j;null===(j=this.nextElementSibling)||void 0===j||j.focus()},this.moveLeftOffGroup=()=>{var j;null===(j=this.previousElementSibling)||void 0===j||j.focus()},this.focusOutHandler=j=>{const E0=this.slottedRadioButtons,O1=j.target,p3=null!==O1?E0.indexOf(O1):0,Fe=this.focusedRadio?E0.indexOf(this.focusedRadio):-1;return(0===Fe&&p3===Fe||Fe===E0.length-1&&Fe===p3)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),E0.forEach(r4=>{r4!==this.selectedRadio&&r4.setAttribute("tabindex","-1")}))):(this.focusedRadio=E0[0],this.focusedRadio.setAttribute("tabindex","0"),E0.forEach(r4=>{r4!==this.focusedRadio&&r4.setAttribute("tabindex","-1")}))),!0},this.clickHandler=j=>{const E0=j.target;E0&&(E0.checked||0===this.slottedRadioButtons.indexOf(E0)?(E0.setAttribute("tabindex","0"),this.selectedRadio=E0):(E0.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=E0),j.preventDefault()},this.shouldMoveOffGroupToTheRight=(j,E0,O1)=>j===E0.length&&this.isInsideToolbar&&O1===p1.mr,this.shouldMoveOffGroupToTheLeft=(j,E0)=>(this.focusedRadio?j.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&E0===p1.BE,this.checkFocusedRadio=()=>{null!==this.focusedRadio&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=j=>{const E0=this.slottedRadioButtons;let O1=0;if(O1=this.focusedRadio?E0.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(O1,E0,j.key))this.moveRightOffGroup();else for(O1===E0.length&&(O1=0);O1<E0.length&&E0.length>1;){if(!E0[O1].disabled){this.moveToRadioByIndex(E0,O1);break}if(this.focusedRadio&&O1===E0.indexOf(this.focusedRadio))break;if(O1+1>=E0.length){if(this.isInsideToolbar)break;O1=0}else O1+=1}},this.moveLeft=j=>{const E0=this.slottedRadioButtons;let O1=0;if(O1=this.focusedRadio?E0.indexOf(this.focusedRadio)-1:0,O1=O1<0?E0.length-1:O1,this.shouldMoveOffGroupToTheLeft(E0,j.key))this.moveLeftOffGroup();else for(;O1>=0&&E0.length>1;){if(!E0[O1].disabled){this.moveToRadioByIndex(E0,O1);break}if(this.focusedRadio&&O1===E0.indexOf(this.focusedRadio))break;O1-1<0?O1=E0.length-1:O1-=1}},this.keydownHandler=j=>{const E0=j.key;if(E0 in p1.uf&&this.isInsideFoundationToolbar)return!0;switch(E0){case p1.kL:this.checkFocusedRadio();break;case p1.mr:case p1.iF:this.direction===ha.ltr?this.moveRight(j):this.moveLeft(j);break;case p1.BE:case p1.SB:this.direction===ha.ltr?this.moveLeft(j):this.moveRight(j);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(j=>{j.readOnly=!!this.readOnly})}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach(j=>{j.disabled=!!this.disabled})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(j=>{j.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(j=>{j.value===this.value&&(j.checked=!0,this.selectedRadio=j)}),this.$emit("change")}slottedRadioButtonsChanged(j,E0){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var j;return null!==(j=this.parentToolbar)&&void 0!==j&&j}get isInsideFoundationToolbar(){var j;return!(null===(j=this.parentToolbar)||void 0===j||!j.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(N0=>{const d2=this.closest("[dir]");return null!==d2&&"rtl"===d2.dir?ha.rtl:ha.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(j=>{j.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const j=this.slottedRadioButtons.filter(p3=>p3.hasAttribute("checked")),E0=j?j.length:0;E0>1&&(j[E0-1].checked=!0);let O1=!1;if(this.slottedRadioButtons.forEach(p3=>{void 0!==this.name&&p3.setAttribute("name",this.name),this.disabled&&(p3.disabled=!0),this.readOnly&&(p3.readOnly=!0),this.value&&this.value===p3.value?(this.selectedRadio=p3,this.focusedRadio=p3,p3.checked=!0,p3.setAttribute("tabindex","0"),O1=!0):(this.isInsideFoundationToolbar||p3.setAttribute("tabindex","-1"),p3.checked=!1),p3.addEventListener("change",this.radioChangeHandler)}),void 0===this.value&&this.slottedRadioButtons.length>0){const p3=this.slottedRadioButtons.filter(r4=>r4.hasAttribute("checked")),Fe=null!==p3?p3.length:0;if(Fe>0&&!O1){const r4=p3[Fe-1];r4.checked=!0,this.focusedRadio=r4,r4.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}return(0,y.gn)([(0,e0.Lj)({attribute:"readonly",mode:"boolean"})],N0.prototype,"readOnly",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"disabled",mode:"boolean"})],N0.prototype,"disabled",void 0),(0,y.gn)([e0.Lj],N0.prototype,"name",void 0),(0,y.gn)([e0.Lj],N0.prototype,"value",void 0),(0,y.gn)([e0.Lj],N0.prototype,"orientation",void 0),(0,y.gn)([B0.LO],N0.prototype,"childItems",void 0),(0,y.gn)([B0.LO],N0.prototype,"slottedRadioButtons",void 0),N0})();const tz=class sy extends ez{connectedCallback(){super.connectedCallback();const d2=this.querySelector("label");if(d2){const j="radio-group-"+Math.random().toString(16).slice(2);d2.setAttribute("id",j),this.setAttribute("aria-labelledby",j)}}}.compose({baseName:"radio-group",template:(N0,d2)=>c0.d`
    <template
        role="radiogroup"
        aria-disabled="${j=>j.disabled}"
        aria-readonly="${j=>j.readOnly}"
        @click="${(j,E0)=>j.clickHandler(E0.event)}"
        @keydown="${(j,E0)=>j.keydownHandler(E0.event)}"
        @focusout="${(j,E0)=>j.focusOutHandler(E0.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${j=>"horizontal"===j.orientation?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${(0,c1.Q)({property:"slottedRadioButtons",filter:(0,io.R)("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("flex")} :host {
		align-items: flex-start;
		margin: calc(${U._5} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${U.dR};
		font-size: ${U.cS};
		margin: calc(${U._5} * 1px) 0;
	}
`});class nz extends Q.I{}class iz extends((0,Z1.V2)(nz)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let rm=(()=>{class N0 extends iz{constructor(){super(),this.initialValue="on",this.keypressHandler=j=>{if(j.key!==p1.BI)return!0;!this.checked&&!this.readOnly&&(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var j;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(j=this.defaultChecked)&&void 0!==j&&j,this.dirtyChecked=!1))}connectedCallback(){var j,E0;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(j=this.parentElement)||void 0===j?void 0:j.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(E0=this.defaultChecked)&&void 0!==E0&&E0,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(j){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}return(0,y.gn)([(0,e0.Lj)({attribute:"readonly",mode:"boolean"})],N0.prototype,"readOnly",void 0),(0,y.gn)([B0.LO],N0.prototype,"name",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultSlottedNodes",void 0),N0})();const hy=class cy extends rm{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.textContent?this.textContent:"Radio")}}.compose({baseName:"radio",template:(N0,d2)=>c0.d`
    <template
        role="radio"
        class="${j=>j.checked?"checked":""} ${j=>j.readOnly?"readonly":""}"
        aria-checked="${j=>j.checked}"
        aria-required="${j=>j.required}"
        aria-disabled="${j=>j.disabled}"
        aria-readonly="${j=>j.readOnly}"
        @keypress="${(j,E0)=>j.keypressHandler(E0.event)}"
        @click="${(j,E0)=>j.clickHandler(E0.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${d2.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${j=>j.defaultSlottedNodes&&j.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,c1.Q)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${U.cS};
		line-height: ${U.RU};
		margin: calc(${U._5} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${U.SU};
		border-radius: 999px;
		border: calc(${U.J4} * 1px) solid ${U.nd};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${U._5} * 4px);
		position: relative;
		outline: none;
		width: calc(${U._5} * 4px);
	}
	.label {
		color: ${U.dR};
		cursor: pointer;
		font-family: ${U.I8};
		margin-inline-end: calc(${U._5} * 2px + 2px);
		padding-inline-start: calc(${U._5} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${U.dR};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${U._5} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${U.SU};
		border-color: ${U.nd};
	}
	:host(:not([disabled])) .control:active {
		background: ${U.SU};
		border-color: ${U.R8};
	}
	:host(:${r1.b}) .control {
		border: calc(${U.J4} * 1px) solid ${U.R8};
	}
	:host([aria-checked='true']) .control {
		background: ${U.SU};
		border: calc(${U.J4} * 1px) solid ${U.nd};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${U.SU};
		border: calc(${U.J4} * 1px) solid ${U.nd};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${U.SU};
		border: calc(${U.J4} * 1px) solid ${U.R8};
	}
	:host([aria-checked="true"]:${r1.b}:not([disabled])) .control {
		border: calc(${U.J4} * 1px) solid ${U.R8};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${M2.H};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${U.VF};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'}),le=class vy extends z0{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:b0,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${U.I8};
		font-size: ${U.sN};
		line-height: ${U.vg};
	}
	.control {
		background-color: ${U.g8};
		border: calc(${U.J4} * 1px) solid ${U.GY};
		border-radius: ${U.qw};
		color: ${U.qe};
		padding: calc(${U._5} * 0.5px) calc(${U._5} * 1px);
		text-transform: uppercase;
	}
`});class bn extends Q.I{}class oz extends((0,Z1.Um)(bn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Di=(()=>{class N0 extends oz{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&f1.SO.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,y.gn)([(0,e0.Lj)({attribute:"readonly",mode:"boolean"})],N0.prototype,"readOnly",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"autofocus",void 0),(0,y.gn)([e0.Lj],N0.prototype,"placeholder",void 0),(0,y.gn)([e0.Lj],N0.prototype,"type",void 0),(0,y.gn)([e0.Lj],N0.prototype,"list",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"maxlength",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"minlength",void 0),(0,y.gn)([e0.Lj],N0.prototype,"pattern",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"size",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"spellcheck",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultSlottedNodes",void 0),N0})();class vv{}(0,n4.e)(vv,H3.v),(0,n4.e)(Di,ee.hW,vv);class uv extends Q.I{}class S9 extends((0,Z1.Um)(uv)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}let Mg=(()=>{class N0 extends S9{constructor(){super(...arguments),this.resize="none",this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}return(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"readOnly",void 0),(0,y.gn)([e0.Lj],N0.prototype,"resize",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"autofocus",void 0),(0,y.gn)([(0,e0.Lj)({attribute:"form"})],N0.prototype,"formId",void 0),(0,y.gn)([e0.Lj],N0.prototype,"list",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"maxlength",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id})],N0.prototype,"minlength",void 0),(0,y.gn)([e0.Lj],N0.prototype,"name",void 0),(0,y.gn)([e0.Lj],N0.prototype,"placeholder",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id,mode:"fromView"})],N0.prototype,"cols",void 0),(0,y.gn)([(0,e0.Lj)({converter:e0.Id,mode:"fromView"})],N0.prototype,"rows",void 0),(0,y.gn)([(0,e0.Lj)({mode:"boolean"})],N0.prototype,"spellcheck",void 0),(0,y.gn)([B0.LO],N0.prototype,"defaultSlottedNodes",void 0),N0})();(0,n4.e)(Mg,vv);const y8=class lz extends Mg{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.textContent?this.textContent:"Text area")}}.compose({baseName:"text-area",template:(N0,d2)=>c0.d`
    <template
        class="
            ${j=>j.readOnly?"readonly":""}
            ${j=>"none"!==j.resize?`resize-${j.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${j=>j.defaultSlottedNodes&&j.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,c1.Q)("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${j=>j.autofocus}"
            cols="${j=>j.cols}"
            ?disabled="${j=>j.disabled}"
            form="${j=>j.form}"
            list="${j=>j.list}"
            maxlength="${j=>j.maxlength}"
            minlength="${j=>j.minlength}"
            name="${j=>j.name}"
            placeholder="${j=>j.placeholder}"
            ?readonly="${j=>j.readOnly}"
            ?required="${j=>j.required}"
            rows="${j=>j.rows}"
            ?spellcheck="${j=>j.spellcheck}"
            :value="${j=>j.value}"
            aria-atomic="${j=>j.ariaAtomic}"
            aria-busy="${j=>j.ariaBusy}"
            aria-controls="${j=>j.ariaControls}"
            aria-current="${j=>j.ariaCurrent}"
            aria-describedby="${j=>j.ariaDescribedby}"
            aria-details="${j=>j.ariaDetails}"
            aria-disabled="${j=>j.ariaDisabled}"
            aria-errormessage="${j=>j.ariaErrormessage}"
            aria-flowto="${j=>j.ariaFlowto}"
            aria-haspopup="${j=>j.ariaHaspopup}"
            aria-hidden="${j=>j.ariaHidden}"
            aria-invalid="${j=>j.ariaInvalid}"
            aria-keyshortcuts="${j=>j.ariaKeyshortcuts}"
            aria-label="${j=>j.ariaLabel}"
            aria-labelledby="${j=>j.ariaLabelledby}"
            aria-live="${j=>j.ariaLive}"
            aria-owns="${j=>j.ariaOwns}"
            aria-relevant="${j=>j.ariaRelevant}"
            aria-roledescription="${j=>j.ariaRoledescription}"
            @input="${(j,E0)=>j.handleTextInput()}"
            @change="${j=>j.handleChange()}"
            ${(0,e3.i)("control")}
        ></textarea>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-block")} :host {
		font-family: ${U.I8};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${U.zJ};
		background: ${U.sE};
		border-radius: calc(${U.Rm} * 1px);
		border: calc(${U.J4} * 1px) solid ${U.Bv};
		font: inherit;
		font-size: ${U.cS};
		line-height: ${U.RU};
		padding: calc(${U._5} * 2px + 1px);
		width: 100%;
		min-width: ${U.Of};
		resize: none;
	}
	.control:hover:enabled {
		background: ${U.sE};
		border-color: ${U.Bv};
	}
	.control:active:enabled {
		background: ${U.sE};
		border-color: ${U.R8};
	}
	.control:hover,
	.control:${r1.b},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${U.LF};
		height: ${U.I4};
	}
	.control::-webkit-scrollbar-corner {
		background: ${U.sE};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${U.et};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${U.AB};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${U.yn};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${U.R8};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${U.dR};
		cursor: pointer;
		font-size: ${U.cS};
		line-height: ${U.RU};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${M2.H};
	}
	:host([disabled]) {
		opacity: ${U.VF};
	}
	:host([disabled]) .control {
		border-color: ${U.Bv};
	}
`,shadowOptions:{delegatesFocus:!0}});function ks(N0,d2,j){return N0.nodeType!==Node.TEXT_NODE||"string"==typeof N0.nodeValue&&!!N0.nodeValue.trim().length}const gy=class Ms extends Di{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.textContent?this.textContent:"Text field")}}.compose({baseName:"text-field",template:(N0,d2)=>c0.d`
    <template
        class="
            ${j=>j.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${j=>j.defaultSlottedNodes&&j.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,c1.Q)({property:"defaultSlottedNodes",filter:ks})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,ee.m9)(N0,d2)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${j=>j.handleTextInput()}"
                @change="${j=>j.handleChange()}"
                ?autofocus="${j=>j.autofocus}"
                ?disabled="${j=>j.disabled}"
                list="${j=>j.list}"
                maxlength="${j=>j.maxlength}"
                minlength="${j=>j.minlength}"
                pattern="${j=>j.pattern}"
                placeholder="${j=>j.placeholder}"
                ?readonly="${j=>j.readOnly}"
                ?required="${j=>j.required}"
                size="${j=>j.size}"
                ?spellcheck="${j=>j.spellcheck}"
                :value="${j=>j.value}"
                type="${j=>j.type}"
                aria-atomic="${j=>j.ariaAtomic}"
                aria-busy="${j=>j.ariaBusy}"
                aria-controls="${j=>j.ariaControls}"
                aria-current="${j=>j.ariaCurrent}"
                aria-describedby="${j=>j.ariaDescribedby}"
                aria-details="${j=>j.ariaDetails}"
                aria-disabled="${j=>j.ariaDisabled}"
                aria-errormessage="${j=>j.ariaErrormessage}"
                aria-flowto="${j=>j.ariaFlowto}"
                aria-haspopup="${j=>j.ariaHaspopup}"
                aria-hidden="${j=>j.ariaHidden}"
                aria-invalid="${j=>j.ariaInvalid}"
                aria-keyshortcuts="${j=>j.ariaKeyshortcuts}"
                aria-label="${j=>j.ariaLabel}"
                aria-labelledby="${j=>j.ariaLabelledby}"
                aria-live="${j=>j.ariaLive}"
                aria-owns="${j=>j.ariaOwns}"
                aria-relevant="${j=>j.ariaRelevant}"
                aria-roledescription="${j=>j.ariaRoledescription}"
                ${(0,e3.i)("control")}
            />
            ${(0,ee.LC)(N0,d2)}
        </div>
    </template>
`,styles:(N0,d2)=>L0.i`
	${(0,W0.j)("inline-block")} :host {
		font-family: ${U.I8};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${U.zJ};
		background: ${U.sE};
		border-radius: calc(${U.Rm} * 1px);
		border: calc(${U.J4} * 1px) solid ${U.Bv};
		height: calc(${U.WC} * 1px);
		min-width: ${U.Of};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${U._5} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${U._5} * 2px + 1px);
		font-size: ${U.cS};
		line-height: ${U.RU};
	}
	.control:hover,
	.control:${r1.b},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${U.dR};
		cursor: pointer;
		font-size: ${U.cS};
		line-height: ${U.RU};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${U._5} * 4px);
		height: calc(${U._5} * 4px);
	}
	.start {
		margin-inline-start: calc(${U._5} * 2px);
	}
	.end {
		margin-inline-end: calc(${U._5} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${U.sE};
		border-color: ${U.Bv};
	}
	:host(:active:not([disabled])) .root {
		background: ${U.sE};
		border-color: ${U.R8};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${U.R8};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${M2.H};
	}
	:host([disabled]) {
		opacity: ${U.VF};
	}
	:host([disabled]) .control {
		border-color: ${U.Bv};
	}