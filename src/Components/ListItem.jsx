import React from 'react';
import "./List.css"

function ListItem(props) {
  return (
    <tr className="styled-table">
      <td>
        <tr><th scope="row">Raw</th></tr>
        <tr><th scope="row">fmt</th></tr>
        <tr><th scope="row">longFmt</th></tr>
      </td>
      <td>
        <tr><td>{props.accountsPayable.raw}</td></tr>
        <tr><td>{props.accountsPayable.fmt}</td></tr>
        <tr><td>{props.accountsPayable.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.cash.raw}</td></tr>
        <tr><td>{props.cash.fmt}</td></tr>
        <tr><td>{props.cash.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.commonStock.raw}</td></tr>
        <tr><td>{props.commonStock.fmt}</td></tr>
        <tr><td>{props.commonStock.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.inventory.raw}</td></tr>
        <tr><td>{props.inventory.fmt}</td></tr>
        <tr><td>{props.inventory.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.longTermDebt.raw}</td></tr>
        <tr><td>{props.longTermDebt.fmt}</td></tr>
        <tr><td>{props.longTermDebt.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.netReceivables.raw}</td></tr>
        <tr><td>{props.netReceivables.fmt}</td></tr>
        <tr><td>{props.netReceivables.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.netTangibleAssets.raw}</td></tr>
        <tr><td>{props.netTangibleAssets.fmt}</td></tr>
        <tr><td>{props.netTangibleAssets.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.totalAssets.raw}</td></tr>
        <tr><td>{props.totalAssets.fmt}</td></tr>
        <tr><td>{props.totalAssets.longFmt}</td></tr>
      </td>
      <td>
        <tr><td>{props.treasuryStock.raw}</td></tr>
        <tr><td>{props.treasuryStock.fmt}</td></tr>
        <tr><td>{props.treasuryStock.longFmt}</td></tr>
      </td>
    </tr>
  );
}

export default ListItem;