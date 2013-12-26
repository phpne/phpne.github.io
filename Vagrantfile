Vagrant.configure("2") do |config|
    config.vm.box = "precise64"
    config.vm.box_url = "http://files.vagrantup.com/precise64.box"
    config.vm.hostname = "phpne-org-uk"
    config.vm.network :forwarded_port, guest: 4000, host: 4000
    config.vm.provider :virtulabox do |virtualbox|
        virtualbox.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
    end
    config.vm.provision :shell, :path => "_env/provision.sh"
end
