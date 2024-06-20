This Next.js website lists my certification credentials.

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build and Export

Build and export the static site:

```bash
pnpm build
```

The static site will be in the `/out` directory. Serve it locally:

```bash
python3 -m http.server
```

## Deployment

The site is deployed using Amazon S3 static website hosting. The infrastructure is set up using the `s3-static-site.yml` CloudFormation template. A GitHub Action enables CI/CD.

## Update

To update the website, add the PDF credential to the `public/certs/pdf` folder, commit, and push. The CI/CD pipeline will handle the rest.
