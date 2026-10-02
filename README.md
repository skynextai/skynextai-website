# SKYNEXT AI website

A responsive, dependency-free static company website. It can be hosted without a paid server or build process.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000.

## Free hosting with Cloudflare Pages

Cloudflare Pages offers a free plan suitable for a static site like this one. It does not need Vercel, Render, a server process, or a build command.

1. Put these files in a GitHub repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that repository.
3. Choose **None** as the framework preset. Leave the build command blank and set the build output directory to `.`.
4. Deploy. Cloudflare gives the site a `*.pages.dev` address; note the project name in that address.
5. In the Pages project, open **Custom domains** > **Set up a domain** and enter `www.skynextai.thequickhire.in`. If you also want the shorter `skynextai.thequickhire.in` address to work, add that as a second custom domain too.
6. In GoDaddy, open **thequickhire.in** > **Manage DNS** and add a CNAME record for each hostname you want:

	| Type | Name | Value |
	| --- | --- | --- |
	| `CNAME` | `www.skynextai` | `<your-project>.pages.dev` |
	| `CNAME` | `skynextai` | `<your-project>.pages.dev` |

	Replace `<your-project>` with the Pages project's actual `*.pages.dev` hostname. Add only the row for each hostname you added in Pages **Custom domains**. Do not edit or delete the existing `www` CNAME for `thequickhire.in`; `www.skynextai` is a separate DNS name.

7. Save the DNS records, then wait for Cloudflare to activate the custom domain and issue its TLS certificate. DNS for these subdomains can stay at GoDaddy; you do not need to change the domain's nameservers.

Cloudflare's free plan currently has usage limits and providers can change plans. This site itself has no paid dependencies or backend. The `thequickhire.in` domain renewal remains payable to GoDaddy when it comes due; free hosting does not make domain registration free.

## Before publishing

- The contact and footer links use `https://www.skynextai.thequickhire.in`.
- Replace the external circuit-board photo URL in `index.html` with a company-owned image if you have one. The current photo is served by Unsplash and needs an internet connection.
- Add a real project email or inquiry form destination once you choose where project requests should go.# skynextai
# skynextai-website
# skynextai-website
# skynextai-website
# skynextai-website
# skynextai-website
