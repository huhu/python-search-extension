local manifest = import 'core/manifest.libsonnet';
local utils = import 'core/utils.libsonnet';

local icons() = {
  [size]: 'logo.png'
  for size in ['16', '48', '128']
};

local json = manifest.new(
  name='Python Search Extension',
  version='0.1',
  keyword='py',
  description='The utlimate search extension for Python',
)
             .addIcons(icons())
             .addBackgroundScripts(utils.js_files('command', ['help']))
             .addBackgroundScripts(['main.js']);

json
