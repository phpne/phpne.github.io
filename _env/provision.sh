echo 'if [ -d /vagrant ]; then cd /vagrant; fi' >> /home/vagrant/.bashrc
apt-get -qq -y update
apt-get -y install ruby1.9.3 build-essential
gem install jekyll -v "=1.4.2" --no-rdoc --no-ri
cp -f /vagrant/_env/jekyll-serve.conf /etc/init/
service jekyll-server start