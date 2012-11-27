charm-example
=============

Set up the node server and a reverse-proxy:

    juju bootstrap 
    
    juju deploy --repository=~/devbliss/charm-example local:precise/nodejs

    juju deploy varnish

    juju add-relation varnish nodejs
    juju expose varnish

And scale up:

    juju add-unit -n5 nodejs

Fantastic.
