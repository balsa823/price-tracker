# Backend task

Potrebno je napisati smart contract i server aplikaciju koja ce pomoci da se zabelezava cena odredjenih simbola na ethereum mrezi, uz odredjena pravila:

### Solidity:

1. Smart contract treba da ima samo jednu public funkciju “set” koja prima symbol i cenu, smart contract upisuje cenu za odredjeni simbol u storage i emituje event koji kaze da je cena za odredjeni simbol promenjena
2. Ukoliko se nova cena ne razlikuje od trenutne onchain cene za vise od 2%, smart contract treba da reverteuje transakciju

### Backend:

1. Aplikacija svaki minut povlaci cenu svih potrebnih simbola koristeci ovaj api: [https://www.coingecko.com/en/api/documentation](https://www.coingecko.com/en/api/documentation)
2. Ukoliko se cena razlikuje dovoljno u odnosu na onchain cenu, salje transakciju koja za odredjeni simbol upisuje novu cenu
3. Za pocetak je potrebno da bude podrzano cene za bitcoin i ethereum
4. Server ne sme da koristi bilo kakav vid baze ili permanentnog storagea
5. Server treba da ima api endpoint gde moze da izvuce istoriju cena za odredjeni simbol u odredjenom periodu
6. Server treba da ima socket u koji publishuje svaki put kad se onchain cena promeni, treba imati u vidu da bilo ko moze da upise cenu na smart contract, a ne samo vas server
7. Server treba da ima api endpoint koji vraca cenu sa contracta i cenu sa api-ja u tom trenutku

### Linkovi i saveti koji mogu da pomognu:

1. Obzirom da ne zelimo da trosimo ether na ovo, potrebno je da koristite Kovan test mrezu, besplatan kovan rpc mozete da napravite na [https://alchemyapi.io/](https://alchemyapi.io/)
2. Za pisanje smart i deployment smart contracta, najlakse ce vam biti da koristite [https://remix.ethereum.org/](https://remix.ethereum.org/) , tu postoji IDE i deployment se radi preko MetaMask-a
3. MetaMask je ekstenzija za Ethereum wallet, budite sigurni da prebacite na Kovan mrezu ([https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en))
4. Video koriscenja etherscana (explorer za Ethereum mrezu [https://kovan.etherscan.io/](https://kovan.etherscan.io/)): [https://photos.app.goo.gl/HHsUHLhTkLyzT9PC8](https://photos.app.goo.gl/HHsUHLhTkLyzT9PC8)
5. Web3 je biblioteka za komunikaciju sa ethereumom:
    - **[https://github.com/ethereum/go-ethereum/tree/master/ethclient](https://github.com/ethereum/go-ethereum/tree/master/ethclient)** - golang ethereum client
    - **[https://web3js.readthedocs.io/en/v1.5.2/](https://web3js.readthedocs.io/en/v1.5.2/)** - nodejs
    - **[https://web3py.readthedocs.io/en/stable/](https://web3py.readthedocs.io/en/stable/)** - python

**Krajnji rok za zavrsetak projekta je dve nedelje od danas, za sva pitanja mozete da me kontaktirate u bilo kom trenutku. Takodje kada napravite adresu na MetaMasku prebacite mrezu na kovan (na vrhu modala u sredini to mozete da uradite) i posaljite mi poruku da vam posaljem test ethere na vasu adresu.**
