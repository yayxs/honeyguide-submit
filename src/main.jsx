import { useState, Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

function delay(page, ms) {
	console.log('page: ', page);
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function A() {
	return <div className='letter'>AAAAA</div>;
}

function B() {
	delay('B', 2000);

	return <div className='letter'> BB</div>;
}

function C() {
	delay('C', 4000);
	return <div className='letter'> CCCCC</div>;
}

function Page1() {
	return <A />;
}

function Page2() {
	return (
		<>
			<B />
			<Suspense fallback={<div>Loading... C</div>}>
				<C />
			</Suspense>
		</>
	);
}

function App() {
	const [showPage2, setShowPage2] = useState(false);
	const handleClick = () => setShowPage2(true);
	return (
		<div className='app'>
			<div>
				<button onClick={handleClick}>切换</button>
			</div>

			<div className='page'>
				<Suspense fallback={<div>loading</div>}>
					{!showPage2 ? <Page1 /> : <Page2 />}
				</Suspense>
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
