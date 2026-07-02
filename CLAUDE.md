## Development

Astro's CLI has no `--background`, `status`, `stop`, or `logs` subcommands
(confirmed against `astro dev --help` on 5.18.2). Passing them doesn't error —
`astro dev` just ignores the extra argument and starts a *new* server on the
next free port, so calling `astro dev status`/`astro dev stop` repeatedly
spawns more orphaned servers instead of managing the original one.

To start the dev server without leaving orphaned processes:

- Launch `npm run dev` (or `npx astro dev`) as a background command (e.g. the
  Bash tool's `run_in_background: true`), which gives you a way to track and
  stop that specific process.
- Poll the port instead of sleeping blindly:
  `until curl -sf http://localhost:4321 >/dev/null; do sleep 1; done`
- To stop it, kill the tracked process (or, on Windows, find it first —
  don't kill blindly:
  `Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Select ProcessId, CommandLine`
  — then `Stop-Process -Id <id> -Force` only the one(s) whose `CommandLine`
  reference this project's `astro dev`).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
