// const h1=React.createElement('h1',{id:"head"},'helloooooooo');
//         console.log(h1);
//         // <!-- { $$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {… }, … } -->
//         const root= ReactDOM.createRoot(document.getElementById('root'));
//         root.render(h1);//render = take the object, create h1 from the object and give it to the browser.

{/* <div id="parent">
    <div id="child">
        <h1>Hii,There</h1>
        <h2>yes</h2>

    </div>
</div> */}
const parent= React.createElement(
    'div',
    {id:"parent"},
    React.createElement(
        'div',
        {id:"child"},
        [React.createElement('h1',{},'Hii, There'), React.createElement('h2',{},'yes')]
    )
);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);