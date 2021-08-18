
//����¼
class Memento {
    private state: string;
    public constructor(state: string) {
        this.state = state;
    }
    public setState(state: string): void {
        this.state = state;
    }
    public getState(): string {
        return this.state;
    }
}
//������
class Originator {
    private state: string;
    public setState(state: string): void {
        this.state = state;
    }
    public getState(): string {
        return this.state;
    }
    public createMemento(): Memento {
        return new Memento(this.state);
    }
    public restoreMemento(m: Memento): void {
        this.setState(m.getState());
    }
}
//������
class Caretaker {
    private memento: Memento;
    public setMemento(m: Memento): void {
        this.memento = m;
    }
    public getMemento(): Memento {
        return this.memento;
    }
}


class Client {
    public static main(): void {
        const or: Originator = new Originator();
        const cr: Caretaker = new Caretaker();
        or.setState("S0");
        console.log("��ʼ״̬:" + or.getState());
        cr.setMemento(or.createMemento()); //����״̬      
        or.setState("S1");
        console.log("�µ�״̬:" + or.getState());
        or.restoreMemento(cr.getMemento()); //�ָ�״̬
        console.log("�ָ�״̬:" + or.getState());
    }
}
Client.main()

// ��ʼ״̬:S0
// �µ�״̬:S1
// �ָ�״̬:S0