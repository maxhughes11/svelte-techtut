<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData;
</script>

<h1>Manage Recalls</h1>

<div>

    <table class="border">
        <th>Category</th>
        <th>Amount of Recalls</th>
        <th>Recall ID</th>
        <th>Product Name</th>
        <th>Manufacturer</th>
        <th>Recall Date</th>
        <th>Description</th>
        <th>Severity Level</th>
        <th>Click to shortlist</th>

        
        {#each data.feed as recall} 
        <tr>
            <td>{recall.category}</td>
            <td>{recall.unitsInCirculation}</td>
            <td>{recall.recallNumber}</td>
            <td>{recall.productName}</td>
            <td>{recall.manufacturer}</td>
            <td>{recall.recallDate}</td>
            <td>{recall.hazardDescription}</td>
            <td>High</td>
            <td><input type="checkbox" checked={recall.shortlisted}></td>
        </tr>
    {/each}
    </table>
</div>

<style >
    th {
        padding: 5px;
    }

    table, th, td {
        border: 1px solid #003f7b;
        padding: 5px;
    }
</style>