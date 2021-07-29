import {
  addDependenciesToPackageJson,
  Tree,
  installPackagesTask
} from '@nrwl/devkit';

export default async function (host: Tree) {
  addDependenciesToPackageJson(host, {
    "@core/util": "^12.0.0"
  }, {});
  installPackagesTask(host, false);
}