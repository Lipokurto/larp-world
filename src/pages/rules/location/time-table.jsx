import React from "react";

import s from './table.module.css';

export function TimeTable() {
  return (
    <table class={s.iksweb}>
	<tbody>
		<tr>
			<td>Уровень постройки</td>
			<td>Кол-во работников</td>
			<td>Минут на 1 ед. товара</td>
		</tr>
		<tr>
			<td rowspan="4">1</td>
			<td>1</td>
			<td>10</td>
		</tr>
		<tr>
			<td>2</td>
			<td>9</td>
		</tr>
		<tr>
			<td>3</td>
			<td>8</td>
		</tr>
		<tr>
			<td>4</td>
			<td>7</td>
		</tr>
		<tr>
			<td rowspan="4">2</td>
			<td>1</td>
			<td>9</td>
		</tr>
		<tr>
			<td>2</td>
			<td>8</td>
		</tr>
		<tr>
			<td>3</td>
			<td>7</td>
		</tr>
		<tr>
			<td>4</td>
			<td>6</td>
		</tr>
		<tr>
			<td rowspan="4">3</td>
			<td>1</td>
			<td>8</td>
		</tr>
		<tr>
			<td>2</td>
			<td>7</td>
		</tr>
		<tr>
			<td>3</td>
			<td>6</td>
		</tr>
		<tr>
			<td>4</td>
			<td>5</td>
		</tr>
		<tr>
			<td rowspan="4">4</td>
			<td>1</td>
			<td>7</td>
		</tr>
		<tr>
			<td>2</td>
			<td>6</td>
		</tr>
		<tr>
			<td>3</td>
			<td>5</td>
		</tr>
		<tr>
			<td>4</td>
			<td>4</td>
		</tr>
		<tr>
			<td rowspan="4">5</td>
			<td>1</td>
			<td>6</td>
		</tr>
		<tr>
			<td>2</td>
			<td>5</td>
		</tr>
		<tr>
			<td>3</td>
			<td>4</td>
		</tr>
		<tr>
			<td>4</td>
			<td>3</td>
		</tr>
	</tbody>
</table>
  )
}