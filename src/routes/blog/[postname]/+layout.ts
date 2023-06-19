import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	console.log(params);
	const module = await import(`../../../lib/posts/${params.postname}.md`);

	const content = module.default;
	const title = module.metadata.title;
	const description = module.metadata.description;

	return {
		content,
		title,
		description
	};
}) satisfies LayoutLoad;
