$('head')


class Member {
    #name;
    #email;
    #groups;

    constructor(name, email) {
        this.name = name;
        this.email = email;
        groups = [];
    }

    constructor(name) {
        this.name = name;
        this.email = getEmail(name);
        groups = [];
    }

    joinGroup(group) {
        this.#groups.push(group);
        this.#groups[this.#groups.length-1].add_to_group(this.name, this.email);
    }

    leave(name) {
        this.#groups.splice(groups.indexOf(name), 1);
        this.#groups[this.#groups.length-1].removeUser(this.name);
    }

    pay() {
        
    }

}