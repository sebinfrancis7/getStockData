import React, { useState } from 'react';
import axios from 'axios';
import ListItem from './ListItem'
import "./List.css"



function createList(listItem, i) {
	return (

		<tr className='listItem-row' key={i}>
			<ListItem
				accountsPayable={listItem.accountsPayable}
				cash={listItem.cash}
				commonStock={listItem.commonStock}
				deferredLongTermAssetCharges={listItem.deferredLongTermAssetCharges}
				inventory={listItem.inventory}
				longTermDebt={listItem.longTermDebt}
				netReceivables={listItem.netReceivables}
				netTangibleAssets={listItem.netTangibleAssets}
				totalAssets={listItem.totalAssets}
				treasuryStock={listItem.treasuryStock}
			/>
		</tr>
	);
}


function List() {
	let [responseData, setResponseData] = useState([]);
	let [symbol, setSymbol] = useState();
	let [loaded, setLoaded] = useState(false);
	let [response, setResponse] = useState(false);

	function handlesetResponseData(data) {
		if (data.balanceSheetHistory) {
			setResponseData(data)
			handlesetLoaded(true)
			if (data.balanceSheetHistory.balanceSheetStatements) {
				setResponse(true);
			} else {
				setResponse(false);
			}
		} else {
			handlesetLoaded(true)
			setResponse(false);
		}
		handlesetLoaded(true)

	}

	function handlesetLoaded(value) {
		setLoaded(value)
	}


	function handleChange(event) {
		symbol = event.target.value.toUpperCase();
		setSymbol(symbol)
	}
	function showError() {
		return (
			<td>
				<h2>Cant find data</h2>
			</td>
		)
	}
	function fetchData() {
		axios({
			"method": "GET",
			"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials",
			"headers": {
				"x-rapidapi-host": process.env.REACT_APP_host,
				"x-rapidapi-key": process.env.REACT_APP_key

			},
			"params": {
				symbol: symbol, region: 'US'
			}
		})
			.then((response) => {
				handlesetResponseData(response.data);
				console.log(response.data)

			})
			.catch((error) => {
				console.log(error)
				handlesetLoaded(false)
			})
	}

	function handleClick() {
		fetchData();
	}

	return (
		<div id="list">
			<h2>Balance Sheet Statements</h2>
			<div className="selection-div">
				<input onChange={handleChange} type="text" placeholder="Enter Ticker Name (eg. GME, GOOG, ..."></input>
				<button className="button" type='button' onClick={handleClick}>Click for Data</button>
			</div>

			{loaded ? <h4>Symbol : {symbol}</h4> : undefined}
			{loaded ?
				<div class="table-responsive">
					<table className="styled-table table table-hover">
						<thead>
							<tr>
								<th>
									<th scope="col" > DATA </th>
									<th scope="col" >AccountsPayable</th>
									<th scope="col">Cash</th>
									<th scope="col">CommonStock</th>
									<th scope="col">Inventory</th>
									<th scope="col">LongTermDebt</th>
									<th scope="col">netReceivables</th>
									<th scope="col">netTangibleAssets</th>
									<th scope="col">totalAssets</th>
									<th scope="col">treasuryStock</th>
								</th>

							</tr>
						</thead>
						<tbody>
							{loaded ? response ? responseData.balanceSheetHistory.balanceSheetStatements.map(createList) : showError() : showError()}
						</tbody>
					</table>
				</div>
				: undefined}
		</div>
	);
}

export default List;