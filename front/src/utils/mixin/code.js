import { getCode } from '../../api/login';
const codeMinxins = {
  data() {
    return {
      svg: ''
    };
  },
  mounted() {
    this._getCode();
  },
  methods: {
    _getCode() {
      getCode().then(res => {
        // console.log(res);
        if (res.code === 200) {
          this.svg = res.msg;
        }
      });
    }
  }
};

export { codeMinxins };
