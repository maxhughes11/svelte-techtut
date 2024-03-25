
<h1>Sign up for a new CPSC Account</h1>

<form>
    <label for="email">Your email:</label>
    <input name="email" type="email" required>

    <label for="name">Your name</label>
    <input name="name" type="text" required>

    <label for="contact">Contact Number</label>
    <input name="contact" type="tel" required>

    <label for="password">Your password:</label>
    <input name="password" type="password" required>

    <label for="role"></label>
    <select name="role">
        <option value="Investigator">Investigator</option>
        <option value="Manager">Manager</option>
    </select>

    <button type="submit">Submit</button>
</form>

<style>
    form {
        border: 0.5cm;
        margin: 20px;
        display: flex;
        flex-direction: column;
        width: 20%;
    }

    form * {
        margin: 5px;
    }
</style>