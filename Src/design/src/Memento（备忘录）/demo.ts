// ����¼��
class Memento {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
}

// ԭ������
class Role {
    private x: number;
    private y: number;
    constructor(name: string, x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    // �ƶ����µ�λ��
    moveTo(x: number, y: number): Memento {
        this.x = x;
        this.y = y;
        return this.save();
    }
    save(): Memento {
        return new Memento(this.x, this.y);
    }
    // ���ݱ���¼���˵�ĳһ��λ��
    goBack(memento: Memento) {
        this.x = memento.getX();
        this.y = memento.getY();
    }
}

// �����ˣ��������б���¼
class HistoryRecords {
    private records = [];
    // ���ӱ���¼
    add(record: Memento): void {
        this.records.push(record);
    }
    // ���ر���¼
    get(index: number): Memento {
        if (this.records[index]) {
            return this.records[index];
        }
        return null;
    }
    // ���ָ��λ�ú���ı���¼
    cleanRecordsAfter(index: number): void {
        this.records.slice(0, index + 1);
    }
}


class Client {
    public static main(): void {
        const role = new Role('��ͨС��', 0, 0);
        const records = new HistoryRecords();
        // ��¼��ʼλ��
        records.add(role.save());
        // �ƶ�ʱ���ӱ���¼
        role.moveTo(10, 10);
        records.add(role.save());
        role.moveTo(20, 30);
        records.add(role.save());
        // ���˵���ʼλ��
        const GO_BACK_STEP = 0;
        const firstMemento = records.get(GO_BACK_STEP);
        role.goBack(firstMemento);
        // �������ļ�¼
        records.cleanRecordsAfter(GO_BACK_STEP);
    }
}
Client.main()

