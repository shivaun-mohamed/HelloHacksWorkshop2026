const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/type/:idOrName', async (req, res) => {
	const { idOrName } = req.params;

	try {
		const response = await fetch(`https://pokeapi.co/api/v2/type/${encodeURIComponent(idOrName)}/`);
		const data = await response.json();
		const damageRelations = data.damage_relations || {};
		const namesOnly = (relations = []) => relations.map(({ name }) => name);

		res.status(response.status).json({
			half_damage_to: namesOnly(damageRelations.half_damage_to),
			double_damage_from: namesOnly(damageRelations.double_damage_from),
		});
	} catch (error) {
		res.status(502).json({ error: 'Unable to reach PokeAPI.' });
	}
});

app.listen(port, () => {
	console.log(`Backend server listening on http://localhost:${port}`);
});
